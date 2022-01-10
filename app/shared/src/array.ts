/**
 * 将传入参数转换成为数组格式
 * @param args 传入参数
 * @example
 * castArray(1) => [1]
 * castArray(1,2,3,4) => [1, 2, 3, 4]
 * @return { Array }
 */
export const castArray = (
  ...args: Array<string | number>
): Array<string | number> => args;


/** 
 * 是否是数组
 * @param args 传入参数
 * @example
 * isArray([]) true
 * isArray({}) false
 * @returns { boolean }
 */
export const isArray = Array.isArray