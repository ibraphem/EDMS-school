import httpRequest from "@/utils/httpRequest";
import { BASE_URL } from "@/config/settings";


export const createUser = async (payload) => {
    return await httpRequest(`${BASE_URL}/users`, "post", payload);
};