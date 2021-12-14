export type QueryResult<T> = Promise<Result<T>>;

interface Result<T> {
  list: T[];
  current: number;
  total: number;
}

interface Params {
  current?: number;
  pageSize?: number;
  projection?: Record<string, unknown>; // 筛选返回条件
  [params: string]: any; // 剩余查询条件
}

/**
 * 简单通用分页方法
 * @param model 对应的模型实例
 * @param params 参数
 * @returns
 */
export const pageQuery = async (model, params: Params): QueryResult<any> => {
  const { current = 1, pageSize = 20, projection = {}, ...ret } = params;
  const list = await model
    .find({ ...ret }, projection)
    .skip(current - 1 >= 0 ? current - 1 : 0)
    .limit(+pageSize);

  const total = await model.find().count();

  return {
    list,
    current: +current,
    total,
  };
};
