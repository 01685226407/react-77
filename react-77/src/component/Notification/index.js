import React, { useEffect } from "react";
import { message } from "antd";
import { notiSelector } from "./notiSelector";
import { closeNoti } from "../../store/sclies/notiSlices";
import { useSelector, useDispatch } from "react-redux";
export default function MyNotification() {
  const [messageApi, contextHolder] = message.useMessage();
  const { isOpen, type, message: content } = useSelector(notiSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    isOpen &&
      messageApi.open({
        type: type,
        content: content,
        duration: 3,
        onClose: () => {
          dispatch(closeNoti());
        },
      });
  }, [isOpen]);
  return <div>{contextHolder}</div>;
}
