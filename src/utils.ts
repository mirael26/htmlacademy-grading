export const findKeyByValue = (value: any, object: {[key: string]: any}): string | undefined => {
  return Object.keys(object).find(key => object[key] === value);
};