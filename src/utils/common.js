const checkjsondata = (text) => {
  if (
    /^[\],:{}\s]*$/.test(
      text
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const checkParams = (
  formdata,
  paramData,
  headerData,
  jsondata,
  seterrormsg
) => {
  if (!formdata.url) {
    seterrormsg("Request URL is Empty");
    return false;
  }

  if (!checkjsondata(jsondata)) {
    seterrormsg("Text is not valid json");
    return false;
  }

  return true;
};

export const getHeadersandParams = (objArr) => {
  let obj = {};
  objArr.forEach((data) => {
    if (data.hasOwnProperty("check") && data.check) {
      obj = { ...obj, [data.key]: data.value };
    }
  });

  return obj;
};
