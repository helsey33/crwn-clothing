import React from "react";

// import "./custom-button.scss";
import { CustomButtonContainer } from "./CustomButton.styled";

export default function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
