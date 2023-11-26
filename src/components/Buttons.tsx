import React from "react";
import { twMerge } from "tailwind-merge";

export type ButtonTypes = {
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
};
export function PrimaryButton({
  children,
  className,
  disabled,
  onClick,
  type,
}: ButtonTypes) {
  return (
    <button
      onClick={() => {
        onClick ? onClick() : {};
      }}
      type={type ? type : "button"}
      disabled={disabled}
      className={twMerge(
        `rounded-md text-white bg-violet-600 py-2 w-full duration-200`,
        disabled ? "opacity-40" : "hover:opacity-80",
        className
      )}
    >
      {children ? children : "Click Me"}
    </button>
  );
}

export function SecondaryButton({
  type,
  onClick,
  children,
  className,
  disabled,
}: ButtonTypes) {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        "w-full flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-md shadow-sm bg-white duration-200 border-[1px] cursor-pointer hover:brightness-95",
        className
      )}
      type={type ? type : "button"}
      onClick={() => {
        onClick ? onClick() : {};
      }}
    >
      {children ? children : "Click Me"}
    </button>
  );
}
