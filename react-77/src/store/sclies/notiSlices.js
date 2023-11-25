import { createSlice } from "@reduxjs/toolkit";


const notiSlice = createSlice({
    name: "noti",
    initialState: {
      isOpen: false,
      type: "",
      message: "",
    },
    reducers: {
      notiSuccess: (state, action) => {
        const { payload } = action;
        return {
          isOpen: true,
          type: "success",
          message: payload.message,
        };
      },
      notiError: (state, action) => {
        const { payload } = action;
        return {
          isOpen: true,
          type: "error",
          message: payload.message,
        };
      },
      closeNoti: () => {
        return {
          isOpen: false,
          type: "",
          message: "",
        };
      },
    },
  });
  export const { reducer, actions } = notiSlice;
  export const { closeNoti, notiError, notiSuccess } = actions;