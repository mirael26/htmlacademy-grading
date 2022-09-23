export const findKeyByValue = (value: any, object: any): string | undefined => {
  return Object.keys(object).find(key => object[key] === value);
};