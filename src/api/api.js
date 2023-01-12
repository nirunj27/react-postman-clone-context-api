import axios from "axios";
import { getHeadersandParams } from "../utils/common";


export const getData = async (formdata, paramData, headerData, jsondata) => {
  const apiType = formdata.request_type.toLowerCase();
  const apiURL = formdata.url;

  const apiHeaders = getHeadersandParams(headerData)
  const apiParams = getHeadersandParams(paramData)
  try {
    return await axios({
      method: apiType,
      url: apiURL,
      body: jsondata,
      headers:apiHeaders,
      params:apiParams
    });
  } catch (error) {
    console.log("Error !", error);
    return "error";
  }
};
