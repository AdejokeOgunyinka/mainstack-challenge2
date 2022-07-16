import React from 'react';
import AuthLayout from "../../../../layouts/auth";
import Banner from "../../../../compositions/Banner";
import EmailSentText from "../../../../compositions/EmailSent";

const EmailPage = () => {
    return (
        <AuthLayout
            title={"Email Sent"}
            description={
                "An email has been sent to akandemarv@gmail.com. Please check the email to reset your password."
            }
            banner={<Banner />}
            content={<EmailSentText/>}
        />
    );
};

export default EmailPage;