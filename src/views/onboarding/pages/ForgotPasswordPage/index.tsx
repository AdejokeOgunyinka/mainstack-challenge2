import React from 'react';
import AuthLayout from "../../../../layouts/auth";
import Banner from "../../../../compositions/Banner";
import ForgotPassword from "../../../../compositions/Forms/ForgotPassword";


const ForgotPasswordPage = () => {
    return (
        <AuthLayout
            title={"Forgot Password"}
            description={
                "Enter the email associated with your account and we’ll email you a link to reset your password."
            }
            banner={<Banner />}
            content={<ForgotPassword />}
        />
    );
};

export default ForgotPasswordPage;