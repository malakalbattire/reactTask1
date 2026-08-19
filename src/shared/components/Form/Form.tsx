import type { FormHTMLAttributes, ReactNode } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

export default function Form({
  children,
  className = "",
  ...props
}: FormProps) {
  return (
    <form
      className={`w-full ${className}`}
      {...props}
    >
      {children}
    </form>
  );
}