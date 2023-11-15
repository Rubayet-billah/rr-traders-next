"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionHeading from "../utils/SectionHeading";
import FormInput from "../utils/forms/FormInput";

type Inputs = {
  floating_email: string;
  floating_password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="container mx-auto my-12">
      <SectionHeading title="Login" subTitle="Login with your credentials" />
      <form
        className="max-w-md mx-auto mt-5 lg:mt-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          type="email"
          name="email"
          id="floating_email"
          label="Email address"
          required
          register={register}
        />
        <FormInput
          type="password"
          name="password"
          id="floating_password"
          label="Password"
          required
          register={register}
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
