import { LoginForm } from "../../../../compositions/Forms";
import AuthLayout from "../../../../layouts/auth";
import Banner from "../../../../compositions/Banner";

const Login = () => {
  return (
    <AuthLayout
      title={"Log in"}
      description={
        "Welcome, enter your details to login to your mainstack account."
      }
      banner={<Banner />}
      content={<LoginForm />}
    />
  );
};

export default Login;
