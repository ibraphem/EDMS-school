import httpRequest from "@/utils/httpRequest";
import { BASE_URL } from "@/config/settings";

export const createRequest = async (payload) => {
  return await httpRequest(`${BASE_URL}/v1/file/uploadfile`, "post", payload);
};

export const getRequests = async (payload) => {
  return await httpRequest(`${BASE_URL}/v1/file/request`);
};

export const getWorkbenchData = async (payload) => {
  return await httpRequest(`${BASE_URL}/v1/file/workbench`);
};
