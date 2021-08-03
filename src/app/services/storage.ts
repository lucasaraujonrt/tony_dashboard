export const getItem = (key: string) => {
  const authCache = localStorage.getItem(key);
  if (authCache) {
    return JSON.parse(authCache);
  }
}

export const setItem = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
}
