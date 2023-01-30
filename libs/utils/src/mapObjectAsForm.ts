export const mapObjectAsForm = (params: Record<string, string | boolean | number>) => {
  const urlParams = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      urlParams.append(key, value.toString());
    });
  }
  return urlParams.toString();
};
