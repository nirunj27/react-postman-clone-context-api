import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  tableCell: {
    border: "1px solid rgba(224,224,224,1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
  checkbox: {
    padding: ["2px 5px", "!important"],
  },
  textfield: {
    width: "100%",
  },
});

const PostmanRow = ({ setRows, rowId, data, setdata }) => {
  const classes = useStyles();
  const [isChecked, setisChecked] = useState(false);

  const handleChange = (e) => {
    let result = data.filter((entry) => entry.id === Number(e.target.name))[0];

    if (!isChecked) {
      setRows((oldArr) => [...oldArr, rowId]);
      setisChecked(true);
      result ={...result,id:rowId,check:true}
    } else {
      setisChecked(false);
      result = {...result,id:rowId,check:false}
    }

    let index = data.findIndex((value) => value.id === Number(e.target.name));
    if (index === -1) {
      setdata((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], { [index]: result });
      setdata(newArr);
    }
  };

  const onTextChange = (e) => {
    let result = data.filter((entry) => entry.id === rowId)[0];
    result = { ...result, id: rowId, [e.target.name]: e.target.value };

    let index = data.findIndex((value) => value.id === rowId);
    if (index === -1) {
      setdata((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], { [index]: result });
      setdata(newArr);
    }

    console.log(data);
  };

  return (
    <TableRow>
      <TableCell className={classes.tableCell}>
        <Checkbox
          size="large"
          className={classes.checkbox}
          onChange={(e) => handleChange(e)}
          checked={isChecked}
          name={rowId}
        />
      </TableCell>
      <TableCell className={classes.tableCell}>
        <TextField
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          className={classes.textfield}
          onChange={(e) => onTextChange(e)}
          name="key"
        />
      </TableCell>
      <TableCell className={classes.tableCell}>
        <TextField
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          className={classes.textfield}
          onChange={(e) => onTextChange(e)}
          name="value"
        />
      </TableCell>
    </TableRow>
  );
};

export default PostmanRow;
