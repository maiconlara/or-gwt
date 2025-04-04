import Cookie from "js-cookie";


interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

// const EXPIRE_TIME = 1;

const useCookie = () => {
  const getCookie = (key: string) => Cookie.get(key);

  const setCookie = (key: string, value: string, options?: CookieOptions) =>
    Cookie.set(key, value, {
      ...options,
    });

  const removeCookie = (key: string) => Cookie.remove(key);

  return { setCookie, getCookie, removeCookie };
};

export default useCookie;