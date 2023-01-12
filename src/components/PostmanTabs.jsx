import { Box, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useContext } from "react";
import { PostmanContext } from "../context/context";
import PostmanBody from "./PostmanBody";
import PostmanTable from "./PostmanTable";

const PostmanTabs = () => {
  const SelectData = useContext(PostmanContext);
  // console.log(SelectData)

  const { paramData, headerData, setParamData, setHeadersData } = SelectData;
  const [value, setValue] = useState(0);

  const useStyles = makeStyles({
    tab: {
      textTransform: ["none", "!important"],
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: "10px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: { backgroundColor: "#f26b3A", height: 4, bottom: 4 },
          }}
          textColor="none"
          className={classes.tab}
        >
          <Tab label="Params" />
          <Tab label="Headers" />
          <Tab label="Body" />
        </Tabs>
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-0}`}
        aria-labelledby={`simple-tab-0`}
      >
        <PostmanTable
          text="Query Params"
          data={paramData}
          setdata={setParamData}
        />
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-1}`}
        aria-labelledby={`simple-tab-1`}
      >
        <PostmanTable
          text="Headers"
          data={headerData}
          setdata={setHeadersData}
        />
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-2}`}
        aria-labelledby={`simple-tab-2`}
      >
        <PostmanBody />
      </Box>
    </>
  );
};

export default PostmanTabs;
