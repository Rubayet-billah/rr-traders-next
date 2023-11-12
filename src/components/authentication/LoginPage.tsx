import React from "react";
import SectionHeading from "../utils/SectionHeading";
import FormInput from "../utils/forms/FormInput";

const LoginPage = () => {
  return (
    <div className="container mx-auto my-12">
      <SectionHeading title="Login" subTitle="Login with your credentials" />
      <form className="max-w-md mx-auto mt-5 lg:mt-12">
        <FormInput
          type="email"
          name="floating_email"
          id="floating_email"
          label="Email address"
          required
        />
        <FormInput
          type="password"
          name="floating_password"
          id="floating_password"
          label="Password"
          required
        />
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 uppercase"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
