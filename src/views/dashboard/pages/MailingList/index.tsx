import DashboardLayout from "../../../../layouts/dashboard/index";
import MailingListRender from "./MailingListRender";

const MailingList = () => {
  return <DashboardLayout content={<MailingListRender />} />;
};

export default MailingList;
