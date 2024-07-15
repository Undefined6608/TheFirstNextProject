import { BaseResponse, LoginResponse } from "@/types/responseType";
import httpRequest from "@/services/request";
import { PhoneLoginRequest } from "@/types/requestType";

/**
 * 电话号码登录
 * @param body {PhoneLoginRequest} 用户账号密码
 */
export const phoneLoginApi = (
  body: PhoneLoginRequest,
): Promise<BaseResponse<LoginResponse>> =>
  httpRequest<PhoneLoginRequest, BaseResponse<LoginResponse>>(
    "/api/user/phoneLogin",
    {
      method: "POST",
      body: body,
    },
  );
