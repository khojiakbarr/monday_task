import React from "react";

interface MyButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg_red rounded-[20px] py-[13px] px-[20px] text-[16px] font-normal text-white ${className} `}
      onClick={onclick ? onClick : () => {}}
    >
      {children}
    </button>
  );
};

export default MyButton;
