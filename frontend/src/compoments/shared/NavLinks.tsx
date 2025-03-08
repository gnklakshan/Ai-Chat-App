import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  //   onClick?: () => Promise<void>;
  onClick?: () => void | Promise<void>;
};

const NavLinks = (props: Props) => {
  return (
    <Link
      className="navlink"
      to={props.to}
      style={{ backgroundColor: props.bg, color: props.textColor }}
      //   onClick={props.onClick}
    >
      {props.text}
    </Link>
  );
};

export default NavLinks;
