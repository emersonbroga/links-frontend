export const get = (object, path, defaultValue = null) => {
  if (typeof path === 'string') path = path.split('.').filter((key) => key.length);
  const result = path.reduce((dive, key) => dive && dive[key], object);
  return result || defaultValue;
};
