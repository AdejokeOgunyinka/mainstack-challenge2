import { useAppDispatch } from "hooks";
import DashboardLayout from "layouts/dashboard/index";
import { useEffect } from "react";
import { setUserDetails } from "store/slices/userSlice";
import EditorRender from "./EditorRender";

const Editor = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const dummyUserDetails = {
      email: "user@domain.com",
      username: "Editor",
      firstname: "John",
      lastname: "Doe",
      password: "string",
      country: "string",
      dob: "2022-06-17",
      url: "mainstack.me/username",
      device: {
        ip: "string",
      },
    };
    dispatch(setUserDetails(dummyUserDetails));
  }, [dispatch]);

  return <DashboardLayout editor content={<EditorRender />} />;
};

export default Editor;
