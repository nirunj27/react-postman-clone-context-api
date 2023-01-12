import { createContext, useState } from "react";

export const PostmanContext = createContext(null);

export const PostmanContextProvider = ({ children }) => {
  const [formdata, setFormdata] = useState({
    url: "",
    request_type: "POST",
  });

  const [paramData, setParamData] = useState([]);
  const [headerData, setHeadersData] = useState([]);
  const [jsondata, setjsondata] = useState("");

  return (
    <PostmanContext.Provider
      value={{
        formdata,
        setFormdata,
        paramData,
        setParamData,
        headerData,
        setHeadersData,
        jsondata,
        setjsondata,
      }}
    >
      {children}
    </PostmanContext.Provider>
  );
};
