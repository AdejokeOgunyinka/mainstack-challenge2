import React from "react";
import DashboardLayout from "../../../layouts/dashboard/index";
import BalanceContent from "../compositions/BalanceContent";

const Balance = () => {
  return <DashboardLayout content={<BalanceContent />} />;
};

export default Balance;
