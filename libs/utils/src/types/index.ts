export interface StringExtend<T> {
  get: string;
  form: string;
  params: T;
  paramsAsString: string;
}

export interface StringExtendFullUrl<T> extends StringExtend<T> {
  fullUrl: string;
}

export type Params = Record<string, string | boolean | number>;
