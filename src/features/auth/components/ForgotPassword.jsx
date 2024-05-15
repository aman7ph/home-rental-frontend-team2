import React, { useState } from "react";
import { useForgotPasswordMutation } from "../authApiSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await forgotPassword(formData);
        if (response.error) {
          toast.error(response.error.data.error);
        } else {
          if (response.data.error) {
            toast.error(response.data.error);
          } else {
            const { message } = response.data;
            toast.success(message);
            setFormData({
              email: "",
            });
            navigate("/");
          }
        }
      } catch (error) {
        console.error("error:", error);
        toast.error("process failed ");
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {isLoading ? (
        <ImSpinner2 className="mx-auto mt-[200px] animate-spin text-4xl text-violet-700" />
      ) : (
        <section className="m-auto flex items-center justify-center bg-white">
          <form
            onSubmit={handleSubmit}
            className=" m-4 flex flex-col items-center gap-4 sm:m-0"
          >
            <div>
              <h1 className=" text-center text-3xl font-semibold leading-none lg:text-[38px]">
                Want to resate your password ?
              </h1>
              <p className=" text-center">
                please provide the email you signed on{" "}
              </p>
            </div>
            <div className="mb-4 mt-5 w-full">
              <p className="my-2">Email</p>
              <input
                type="email"
                name="email"
                className={`h-12 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700 ${errors.email && "border-red-500"}`}
                placeholder="please enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <button
                type="submit"
                className="w-full rounded bg-violet-700 p-4 text-sm text-white transition hover:bg-violet-800"
              >
                Ask For Resate
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}

export default ForgotPassword;
