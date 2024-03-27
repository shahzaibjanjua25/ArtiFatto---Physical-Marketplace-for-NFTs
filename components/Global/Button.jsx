import React, { useContext } from "react";
import { useTheme } from "next-themes";

const primaryBtnLight =
  "nft-gradient bg-black text-white text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins rounded-full focus:outline-none font-semibold";
const outlineBtnLight =
  "border border-nft-red-violet bg-white font-poppins font-semibold text-sm minlg:text-lg py-2 px-6 minlg:py-4 minlg:px-8";

const primaryBtnDark =
  "nft-gradient bg-white text-black text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins rounded-full focus:outline-none font-semibold";
const outlineBtnDark =
  "border border-nft-red-violet bg-white font-poppins font-semibold text-sm minlg:text-lg py-2 px-6 minlg:py-4 minlg:px-8";

const Button = ({ btnName, classStyle, btnType, handleClick }) => {
  const { theme } = useTheme();

  const primaryBtnStyle = theme === "light" ? primaryBtnLight : primaryBtnDark;
  const outlineBtnStyle = theme === "light" ? outlineBtnLight : outlineBtnDark;

  const btnStyle = btnType === "primary" ? primaryBtnStyle : outlineBtnStyle;

  return (
    <button
      type="button"
      className={`${btnStyle} ${classStyle}`}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
