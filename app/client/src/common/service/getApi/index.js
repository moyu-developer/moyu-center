import request from "src/common/tools/request";

const getApi = (allParams, options) =>
  request({
    url: "",
    method: "GET",
    params: {},
    data: allParams,
    ...options,
  });

export default getApi;
