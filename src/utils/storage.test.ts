import { loadItemFromLocalStorage, saveItemInLocalStorage } from "./storage";

describe("LocalStorage Utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const key = "testKey";
  const value = "testValue";

  it("should save an item in local storage", () => {
    saveItemInLocalStorage(key, value);

    const storedValue = localStorage.getItem(key);
    expect(storedValue).toBe(JSON.stringify(value));
  });

  it("should load an item from local storage", () => {
    saveItemInLocalStorage(key, value);
    const loadedValue = loadItemFromLocalStorage<typeof value>(key);
    expect(loadedValue).toEqual(value);
  });

  it("should return null if the item does not exist in local storage", () => {
    const key = "notStoredKey";

    const loadedValue = loadItemFromLocalStorage(key);
    expect(loadedValue).toBeNull();
  });
});
