import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import PostmanRow from "./PostmanRow";

const useStyles = makeStyles({
  tableCell: {
    border: "1px solid rgba(224,224,224,1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
});

const PostmanTable = ({ text, data, setdata }) => {
  const [rows, setRows] = useState([0]);

  const classes = useStyles();
  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table
        sx={{ minWidth: "100%", border: "1px solid rgba(224,224,224,1)" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}></TableCell>
            <TableCell className={classes.tableCell}>KEY</TableCell>
            <TableCell className={classes.tableCell}>VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <PostmanRow
              setRows={setRows}
              rowId={index}
              key={index}
              data={data}
              setdata={setdata}
            />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default PostmanTable;
