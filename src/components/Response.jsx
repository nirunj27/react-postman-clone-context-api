import { Box, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { PostmanContext } from "../context/context";

const Response = ({response}) => {
  
  const textAreaStyle = {
    width: "100%",
    padding: 10,
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    paddingLeft: 35,
    paddingTop: 10,
    borderColor: "#ccc",
  };

  let obj = response;
    
    let readableobj = '{ \n';
    for(let key in obj) {
        readableobj += '\t'
        readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`; 
        if (Object.keys(obj).pop() !== key.toString()) {
            readableobj += ',\n'
        }
    }
    readableobj += '\n}';

  return (
    <Box>
      <Typography mt={2} mb={2}>
        Response
      </Typography>
      <TextareaAutosize
        readOnly
        maxRows={5}
        minRows={3}
        style={textAreaStyle}
        value={readableobj}
      />
    </Box>
  );
};

export default Response;
