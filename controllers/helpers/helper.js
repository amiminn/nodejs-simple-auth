export const success = (msg) => {
  return {
    success: true,
    msg: msg,
  };
};

export const fail = (msg) => {
  return {
    success: false,
    msg: msg,
  };
};

export const data = (data) => {
  return {
    success: true,
    data: data,
  };
};

export const err = (data) => {
  return data.map((data) => {
    return {
      field: data.path,
      msg: data.message,
    };
  });
};
