import { Box, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { getData } from "../api/api";
import { PostmanContext } from "../context/context";
import { checkParams } from "../utils/common";
import Header from "./Header";
import PostmanError from "./PostmanError";
import PostmanForm from "./PostmanForm";
import PostmanTabs from "./PostmanTabs";
import Response from "./Response";
import SnackBar from "./SnackBar";





const useStyles = makeStyles({
  component: {
    width: "60%",
    margin: "20px auto 20px auto",
  },
});

const Home = () => {
  const classes = useStyles();
  const {formdata,paramData,headerData,jsondata} = useContext(PostmanContext);
  const [error, seterror] = useState(false);
  const [errormsg, seterrormsg] = useState("")
  const [responseshow, setresponseshow] = useState(false);
  const [apiresponse, setapiresponse] = useState({});


  const onSendClick = async (e) => {
    e.preventDefault();
    if(!checkParams(formdata,paramData,headerData,jsondata,seterrormsg)) {
      seterror(true)
      return false;
    }

   let response = await getData(formdata,paramData,headerData,jsondata);
   console.log(response);
   if(response === "error"){
      setresponseshow(true)
      return;
   }
   setresponseshow(false)
   setapiresponse(response.data)

  }
  return (
    <div>
      <Header />
      <Box className={classes.component}>
        <PostmanForm  onSendClick={onSendClick} />
        <PostmanTabs />
        {/* <Response/> */}
        { responseshow ? <PostmanError/>:(<Response response={apiresponse}/>)}
        {/* <PostmanError/> */}
        {error && <SnackBar error={error} seterror={seterror} errormsg={errormsg}/>  }
      </Box>
    </div>
  );
};

export default Home;
