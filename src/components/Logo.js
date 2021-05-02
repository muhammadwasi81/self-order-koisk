import React from "react";
import { useStyles } from "../Styles";

export default function Logo(props) {
  const styles = useStyles();
  return (
    <img
      src="/images/logo.png"
      alt="Food order"
      className={props.large ? styles.largeLogo : styles.logo}
    />
  );
}
