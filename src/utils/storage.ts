export const loadItemFromLocalStorage = <T>(storageKey: string): T | null => {
  const item = localStorage.getItem(storageKey);
  return item ? JSON.parse(item) : null;
};

export const saveItemInLocalStorage = <T>(
  storageKey: string,
  item: T,
): void => {
  localStorage.setItem(storageKey, JSON.stringify(item));
};
