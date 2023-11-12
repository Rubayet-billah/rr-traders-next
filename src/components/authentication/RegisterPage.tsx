"use client";

import SectionHeading from "../utils/SectionHeading";
import FormInput from "../utils/forms/FormInput";

const RegisterPage = () => {
  const handleRegister = () => {};
  return (
    <div className="container mx-auto my-12">
      <SectionHeading
        title="Register"
        subTitle="Register with your valid information"
      />
      <form>
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
        <FormInput
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          label="Confirm password"
          required
        />
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            label="First name"
            required
          />
          <FormInput
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            label="Last name"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            label="Phone number (123-456-7890)"
          />
          <FormInput
            type="text"
            name="floating_company"
            id="floating_company"
            label="Company (Ex. Google)"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 uppercase ml-auto block"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
