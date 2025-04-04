"use client";

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import useCookie from "@/utils/hooks/useCookies";
import { UserProfile } from "@/types";
import api from "@/lib/api";

export type AuthContextData = {
    user: UserProfile | null;
    isLoading: boolean;
    logout: () => void;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

interface GetUserProfile {
    data: UserProfile[];
}

export const AuthContext = createContext<AuthContextData | null>(null);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { removeCookie, getCookie } = useCookie();

    const token = getCookie("usu_token");

    const logout = useCallback(async () => {
        setUser(null);
        removeCookie("usu_token");
        window.location.href = "/";
    }, [setUser, removeCookie]);

    const getUserSession = useCallback(async (): Promise<UserProfile | null | undefined> => {
        setIsLoading(true);
        try {
            const response = await api.get<GetUserProfile>("/perfil");
            const userProfile = response.data;
            setUser(userProfile?.data[0]);
            if (!userProfile) throw new Error("Failed to get user");
            return userProfile.data[0];
        } catch (error: any) {
            console.log(error);
            logout();
            return null;
        } finally {
            setIsLoading(false);
        }
    }, [setUser, logout]);

    useEffect(() => {
        if (user) return;
        getUserSession();
    }, [getUserSession, user]);

    return <AuthContext.Provider value={{ user, logout, isLoading }}>{children}</AuthContext.Provider>;
}
