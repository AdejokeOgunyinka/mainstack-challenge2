import React from "react";
import DashboardLayout from "../../../layouts/dashboard/index";
import PremiumContent from "../compositions/premiumContent";

const UpgradeToPremium = () => {
  return <DashboardLayout content={<PremiumContent />} />;
};

export default UpgradeToPremium;
