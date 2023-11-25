"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionHeading from "../utils/SectionHeading";
import FormInput from "../utils/forms/FormInput";
import { useRegisterUserMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
  repeat_password: string;
  first_name: string;
  last_name: string;
  phone: string;
  company: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [registerUser] = useRegisterUserMutation();

  const handleRegister: SubmitHandler<Inputs> = async (data) => {
    try {
      const { repeat_password, ...registrationData } = data;
      if (data.password !== repeat_password) {
        throw new Error("Passwords don't match");
      }
      const result = await registerUser(registrationData);
      if (!result?.error) {
        toast.success("User registered successfully");
        router.push("/");
      } else {
        toast.error(result?.error?.data?.message);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="container mx-auto my-12">
      <SectionHeading
        title="Register"
        subTitle="Register with your valid information"
      />
      <form className="mt-5 lg:mt-12" onSubmit={handleSubmit(handleRegister)}>
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
        <FormInput
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          label="Confirm password"
          required
          register={register}
        />
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput
            type="text"
            name="first_name"
            id="floating_first_name"
            label="First name"
            required
            register={register}
          />
          <FormInput
            type="text"
            name="last_name"
            id="floating_last_name"
            label="Last name"
            required
            register={register}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <FormInput
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone"
            id="floating_phone"
            label="Phone number (123-456-7890)"
            register={register}
          />
          <FormInput
            type="text"
            name="company"
            id="floating_company"
            label="Company (Ex. Google)"
            register={register}
          />
        </div>
        <div className="text-sm mb-4">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-blue-500 uppercase font-bold text-sm"
          >
            Login
          </Link>{" "}
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
