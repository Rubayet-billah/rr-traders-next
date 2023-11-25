"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionHeading from "../utils/SectionHeading";
import FormInput from "../utils/forms/FormInput";
import { useLoginUserMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Inputs = {
  floating_email: string;
  floating_password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [loginUser] = useLoginUserMutation();

  const handleLogin: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await loginUser(data);
      if (!result?.error) {
        toast.success(result?.data?.message);
        router.push("/");
      } else {
        toast.error(result?.error?.data?.message);
      }
    } catch (error) {
      toast.error("An error occurred while logging in.");
    }
  };

  return (
    <div className="container mx-auto my-12">
      <SectionHeading title="Login" subTitle="Login with your credentials" />
      <form
        className="max-w-md mx-auto mt-5 lg:mt-12"
        onSubmit={handleSubmit(handleLogin)}
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
        <div className="text-sm mb-4">
          New to RR Traders?{" "}
          <Link
            href="/auth/register"
            className="text-blue-500 uppercase font-bold text-sm"
          >
            Register
          </Link>{" "}
        </div>
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
