/**
 * 基本返回类型
 * @param T 返回数据类型
 */
export interface BaseResponse<T> {
  code: number;
  msg: string;
  data: T;
}

/**
 * 文章类型列表
 */
export interface ArticleType {
  articleType: ArticleTypeItem[];
}

/**
 * 文章类型条目
 * @property id 文章类型Id
 * @property root_id 文章根类型Id
 * @property type_name 文章类型名称
 * @property type_visible 文章类型是否显示
 * @property order 文章类型排序
 * @property picture 文章类型图片地址
 * @property edit_status 是否可以查看文章
 */
export interface ArticleTypeItem {
  id: number;
  root_id: number;
  type_name: string;
  type_visible: boolean;
  order: number;
  picture: string;
  edit_status: boolean;
}

/**
 * 登录返回类型
 * @property token 用户API令牌
 */
export interface LoginResponse {
  token: string;
}
