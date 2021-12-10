
/**
 * 将传入参数转换成为数组格式
 * @param args 传入参数
 * @example
 * castArray(1) => [1]
 * castArray(1,2,3,4) => [1, 2, 3, 4]
 * @returns 数组
 */
const castArray = (...args: Array<string | number>): Array<string | number> => args