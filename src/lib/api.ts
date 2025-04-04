/* eslint-disable react-hooks/rules-of-hooks */

import useCookie from "@/utils/hooks/useCookies";
import axios from "axios";
// passar para o .env
const apiUrl = "https://ifestei.belogic.com.br/api";

const { getCookie } = useCookie();

export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

api.interceptors.request.use((config) => {
    const token = getCookie("usu_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  

export default api;
