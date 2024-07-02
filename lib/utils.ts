import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const createdAtDate = new Date(createdAt);
  const now = new Date();

  const difference = now.getTime() - createdAtDate.getTime(); // Ensure difference is a number

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30; // Approximation for months

  if (difference < minute) {
    const seconds = Math.floor(difference / second);
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (difference < hour) {
    const minutes = Math.floor(difference / minute);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (difference < day) {
    const hours = Math.floor(difference / hour);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (difference < month) {
    const days = Math.floor(difference / day);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else {
    const months = Math.floor(difference / month);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }
};

export const formatNumberWithExtension = (number: number): string => {
  if (number >= 1000000) {
    const result = (number / 1000000).toFixed(2); // Divide by million and keep 2 decimal places
    return `${result}M`;
  } else if (number >= 1000) {
    const result = (number / 1000).toFixed(2); // Divide by thousand and keep 2 decimal places
    return `${result}K`;
  } else {
    return `${number}`;
  }
};
