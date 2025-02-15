import { IUser } from "@clinic/types/user";
import { IBook } from "../pages/booking/types.js";

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

export const getUsersFromLocalStorage = (): IUser[] => {
  return getItemFromLocalStorage<IUser[]>("users", []);
};

export const setUsersInLocalStorage = (users: IUser[]): void => {
  setItemInLocalStorage("users", users);
};

export const setLoggedInUserInLocalStorage = (user: IUser): void => {
  setItemInLocalStorage("user", user);
};

export const getLoggedInFromLocalStorage = (): IUser => {
  return getItemFromLocalStorage<IUser>("user", undefined);
};

export const setTokenInLocalStorage = (token) => {
  setItemInLocalStorage("token", token);
};

export const getTokenFromLocalStorage = () => {
  return getItemFromLocalStorage<string>("token", undefined);
};

export const setAppointmentInLocalStorage = (appointment: IBook): void => {
  const appointments = getAppointmentsFromLocalStorage(); 
  appointments.push(appointment); 
  setItemInLocalStorage("appointments", appointments); 
};

export const updateAppointmentInLocalStorage = (appointments: IBook[]): void => {
  setItemInLocalStorage("appointments", appointments); 
};

export const getAppointmentsFromLocalStorage = (): IBook[] => {
  return getItemFromLocalStorage<IBook[]>("appointments", []);
};
