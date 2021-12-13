// import { Model } from 'mongoose';
export interface Result<T> {
  records: T;
  pageCount: number;
}

export const pageQuery = (
  page = 1,
  pageSize = 20,
  Model,
  populate,
  queryParams,
  sortParams,
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const start = (page - 1) * pageSize;
      const $page = {
        pageNumber: page,
        results: 0,
        pageCount: 0,
      };

      const count = await Model.count(queryParams);
      const records = await Model.find(queryParams)
        .skip(start)
        .limit(pageSize)
        .populate(populate)
        .sort(sortParams);
      $page.pageCount = (count - 1) / pageSize + 1;
      $page.results = records;

      resolve({
        records: $page.results,
        pageCount: $page.pageCount,
      });
    } catch (error) {
      reject(error);
    }
  });
};
