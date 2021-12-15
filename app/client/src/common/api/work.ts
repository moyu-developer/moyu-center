import request from "src/common/tools/request";
import { HttpMethod } from "@moyu/request";

export const getWorkList = () =>
  request({
    url: "/work/list",
    method: HttpMethod.GET,
  });
