import { MouseEventHandler, ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;

  // Other Props - please do not rely on this unless very necessary
  [key: string]: any;
}

function Button(props: IButton) {
  const { children, className, onClick, ...others } = props;

  return (
    <button className={`btn ${className}`} onClick={onClick} {...others}>
      {children}
    </button>
  );
}

export default Button;
