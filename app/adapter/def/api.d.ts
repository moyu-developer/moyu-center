interface BaseParamsType {
  name: string;
  desc?: string;
  required: string;
  type?: string;
  example?: string
}


export interface ReturnAPIModule {
  method: string;
  title: string;
  desc?: string;
  catname: string;
  tag: string[];
  path: string;
  req_params: BaseParamsType[]
  req_body_form: BaseParamsType[]
  req_headers: Record<string, any>;
  req_query: BaseParamsType[];
  req_body_type: string;
  res_body_type: string;
  res_body_is_json_schema: boolean,
  res_body: string;
  [K: string]: any
}

export interface ReturnInterfaceResult {
  apis: ReturnAPIModule[];
  category: {
    name: string,
    description?: string
    externalDocs?: {
      description: string,
      url: string
    }
  }[];
  prefix?: string;
} 