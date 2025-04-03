import axios from "axios";
import { store } from "@/redux/store";
import { removeUser } from "../redux/slices/authSlice";
import SnackbarUtils from "../components/customs/CustomNotification";

const httpRequest = async (
  url,
  method = "get",
  body = null,
  contentType = "application/json"
) => {
  const token = store.getState()?.auth?.authUser?.token;

  try {
    const response = await axios({
      url,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
        contentType,
      },
    });
    return response?.data;
  } catch (error) {
    if (error.response?.status === 401) {
      store.dispatch(removeUser());
      //   storeInit.store.dispatch(closeModal());
      SnackbarUtils.error("Your session has expired. Sign in again");
    } else if (error.response?.data) {
      return error?.response?.data;
    } else {
      SnackbarUtils.error(error?.message);
    }
  }
};

export default httpRequest;
