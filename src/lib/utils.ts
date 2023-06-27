import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LocalStorageKeys = {
  TOKEN: "token",
  USERID: "userid",
};

export const NotificationTypes = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARN: "warn",
};

/**
 * Checks if an array is empty
 * @param {Array} arr Array to be tested
 * @return {Boolean} Boolean value
 */
export const isNotEmptyArray = (arr: any[]): boolean =>
  Array.isArray(arr) && arr.length > 0;
