import { ArticleType, BaseResponse } from "@/types/responseType";
import httpRequest from "@/services/request";

/**
 * 获取文章类型
 */
export const getArticleTypeApi = (): Promise<BaseResponse<ArticleType>> =>
  httpRequest<null, BaseResponse<ArticleType>>("/api/article/articleType", {
    method: "GET",
  });
