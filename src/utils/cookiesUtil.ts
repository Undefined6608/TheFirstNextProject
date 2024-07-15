import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const cookiesStore = cookies();

/**
 * 获取 Cookie
 * @param key
 */
export const getCookie = (key: string): RequestCookie | undefined => {
  return cookiesStore.get(key);
};
