export interface ReturnAPIModule {

  path: string;
  method: string;
  title: string;
  tag?: string[];
  [K: string]: any
}

export interface ReturnInterfaceResult {
  apis: any[];
  category: {
    name: string,
    description?: string
  }[];
  prefix?: string;
}