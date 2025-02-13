import { IUser } from "@clinic/types/user";

export const getItemFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

export const setItemInLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};


export const getUserFromLocalStorage = (): IUser[] => {
  return getItemFromLocalStorage<IUser[]>("users", []);
};

export const setUserInLocalStorage = (users: IUser[]): void => {
  setItemInLocalStorage("users", users);
};