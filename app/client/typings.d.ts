declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "*.json";
declare module "*.less";
declare module "*.css";
declare module "*.less";
declare module "*.json";



declare interface HttpResponse<T = null> {
  message: string,
  code: number,
  data: T
}

declare type GotResponse<R> = Promise<HttpResponse<R>>