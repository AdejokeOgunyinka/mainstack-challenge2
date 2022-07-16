import React from 'react';
import AuthLayout from "../../../../layouts/auth";
import Banner from "../../../../compositions/Banner";
import NewPassword from "../../../../compositions/Forms/NewPassword";

const NewPasswordPage = () => {
    return (
        <AuthLayout
            title={"New password"}
            description={
                "Enter your new password to complete your password reset."
            }
            banner={<Banner />}
            content={<NewPassword/>}
        />
    );
};

export default NewPasswordPage;