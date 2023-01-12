import { makeStyles } from "@mui/styles";
import React from "react";
import logo from "../images/logo.png";

const useStyles = makeStyles({
    logo :{
        width:100,
        padding:5
    }
})

const Header = () => {
    const classes = useStyles();
  return (
    <>
      <img src={logo} className={classes.logo} alt="logo" />
    </>
  );
};

export default Header;
