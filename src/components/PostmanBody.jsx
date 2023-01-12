import { Box, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { PostmanContext } from "../context/context";


const PostmanBody = () => {
  const { setjsondata } = useContext(PostmanContext);

  const ontextchange = (e) => {
    setjsondata(e.target.value);
  };
  const textAreaStyle = {
    width: "100%",
    padding: 10,
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    paddingLeft: 35,
    paddingTop: 10,
    borderColor:"#ccc"
  };
  return (
    <>
      <Typography mt={2} mb={2}>
        JSON
      </Typography>
      <TextareaAutosize maxRows={5} minRows={3} style={textAreaStyle} onChange={(e)=>ontextchange(e)} />
    </>
  );
};

export default PostmanBody;
