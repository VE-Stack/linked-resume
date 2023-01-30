import { Params, StringExtend, StringExtendFullUrl } from "./types";
import { mapObjectToUrl } from "./mapObjectToUrl";
import { mapObjectAsForm } from "./mapObjectAsForm";

export function proxyUrl<T extends Params>(url: string, params: T): string & StringExtend<T>;
export function proxyUrl<T extends Params>(
  url: string,
  params: T,
  host: string
): string & StringExtendFullUrl<T>;
export function proxyUrl<T extends Params>(url: string, params: T = {} as T, host?: string) {
  const uri = new String(url);
  Object.defineProperties(uri, {
    get: { value: mapObjectToUrl(url, params) },
    params: { value: params },
    paramsAsString: { value: JSON.stringify(params) },
    form: { value: mapObjectAsForm(params) },
    fullUrl: { value: host + mapObjectToUrl(url, params) }
  });
  return uri;
}
