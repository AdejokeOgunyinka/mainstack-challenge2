import React from 'react';

import Banner from "../../../../compositions/Banner";
import SignUp from "../../../../compositions/Forms/SignUp";
import {AuthLayout} from "../../../../layouts";

const SignUpPage = () => {
    return (
        <AuthLayout
            title={"Get Started"}
            description={
                "Welcome to Mainstack - let’s create your account"
            }
            banner={
                <Banner />
            }
            content={<SignUp />}
        />
    );
};

export default SignUpPage;