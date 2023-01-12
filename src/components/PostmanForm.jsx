import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useContext } from "react";
import { PostmanContext } from "../context/context";

const useStyles = makeStyles({
  select: {
    width: 150,
    height: 40,
  },
  textfield: {
    width: "100%",
    backgroundColor: "#f6f6f6",
  },
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    height: 40,
    marginLeft: [5, "!important"],
  },
});

const PostmanForm = ({ onSendClick }) => {
  const classes = useStyles();
  const { formdata, setFormdata } = useContext(PostmanContext);
  const { url, request_type } = formdata;
  // console.log(formData);

  const handletypeChange = (e) => {
    setFormdata({ ...formdata, request_type: e.target.value });
  };

  const handleurlchange = (e) => {
    setFormdata({ ...formdata, url: e.target.value });
  };

  return (
    <Box className={classes.component}>
      <Select
        className={classes.select}
        value={request_type}
        onChange={(e) => handletypeChange(e)}
      >
        <MenuItem value={"GET"}>GET</MenuItem>
        <MenuItem value={"POST"}>POST</MenuItem>
      </Select>
      <TextField
        size="small"
        className={classes.textfield}
        onChange={(e) => handleurlchange(e)}
        value={url}
      />
      <Button
        className={classes.button}
        variant="contained"
        onClick={(e) => onSendClick(e)}
      >
        Send
      </Button>
    </Box>
  );
};

export default PostmanForm;
