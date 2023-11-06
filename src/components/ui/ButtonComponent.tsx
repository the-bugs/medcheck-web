import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React, { forwardRef, Ref } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(
  [
    "mx-2",
    "my-1",
    "rounded-full",
    "tracking-wider",
    "cursor-pointer",
    "outline-none",
    "inline-flex",
    "items-center",
    "hover:font-semibold",
    "justify-center",
    "relative",
    "shadow-md",
    "focus-visible:ring-2",
    "focus:ring-offset-2",
    "focus:scale-[0.98]",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primaryGreen",
          "font-semibold",
          "text-white",
          "hover:bg-white hover:text-primaryGreen hover:border-2 hover:border-primaryGreen",
        ],
        secondary: [
          "bg-primaryBlue",
          "font-semibold",
          "transition",
          "text-white",
          "text-center",
          "hover:bg-normalBlue",
          "hover:shadow-xl",
          "hover:bg-white hover:text-primaryBlue primaryBlue hover:border-2 hover:border-primaryBlue",
        ],
        third: [
          "text-primaryBlue",
          "font-semibold",
          "opacity-80",
          "border border-primaryBlue",
          "border-2",
          "hover:bg-primaryBlue hover:text-white hover:shadow-xl",
        ],
        success: [
          "bg-green-400",
          "text-black",
          "font-semibold",
          "hover:bg-green-500",
          "hover:shadow-xl",
          "shadow-md",
          "focus:ring-green-500",
        ],
        danger: [
          "bg-red-500",
          "text-white",
          "font-semibold",
          "hover:bg-red-600",
          "hover:shadow-xl",
        ],
      },
      size: {
        small: ["text-sm", "px-4", "py-1", "leading-4"],
        default: ["px-7", "py-2", "leading-6"],
        large: ["px-10", "py-3", "leading-7"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Loading = () => (
  <div className="absolute inline-flex items-center">
    <div className="w-4 h-4 rounded-full border-2  border-b-transparent animate-spin border-[inherit] "></div>
  </div>
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & { loading?: boolean };

const ButtonComponent = forwardRef(
  (
    { className, children, loading, ...rest }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          variants({ variant: rest.variant, size: rest.size, className })
        )}
        {...rest}
      >
        {loading && <Loading />}
        <span
          className={clsx("transition", {
            "opacity-0": loading,
            "opacity-100": !loading,
          })}
        >
          {children}
        </span>
      </button>
    );
  }
);

export default ButtonComponent;
