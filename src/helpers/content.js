export const get = (object, path, defaultValue = null) => {
  if (typeof path === 'string') path = path.split('.').filter((key) => key.length);
  const result = path.reduce((dive, key) => dive && dive[key], object);
  return result || defaultValue;
};

export const isEmpty = (value) => {
  if (typeof value === 'number') return false;
  if (typeof value === 'function') return false;
  if (typeof value === 'boolean') return false;
  if (value instanceof Date) return false;

  if (!value) return true;
  if (value.length === 0) return true;
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};
