export const setItemToLocalstorage = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getItemFromLocalstorage = (key: string): any | null => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};

export const removeItemFromLocalstorage = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const clearLocalstorage = (): void => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};
