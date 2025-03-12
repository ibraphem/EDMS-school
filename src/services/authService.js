import httpRequest from "@/utils/httpRequest";
import { BASE_URL } from "@/config/settings";


export const signIn = async (payload) => {
    return await httpRequest(`${BASE_URL}/tokens?tenant=root`, "post", payload);
};