import React, { useState } from "react";
import { useResatePasswordMutation } from "../authApiSlice";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [resatePassword, { isLoading }] = useResatePasswordMutation();
  const navigate = useNavigate();
  let { token } = useParams();
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.newPassword) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (formData.newPassword.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    if (formData.confirmPassword !== formData.newPassword) {
      errors.confirmPassword = "Passwords do not match";
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
        const response = await resatePassword({
          newPassword: formData.newPassword,
          token,
        });
        if (response.error) {
          toast.error(response.error.data.error || "Error resetting password");
        } else {
          if (response.data.error) {
            toast.error(response.data.error);
          } else {
            const { message } = response.data;
            toast.success(message);
            setFormData({
              newPassword: "",
              confirmPassword: "",
            });
            navigate("/login");
          }
        }
      } catch (error) {
        console.error("error:", error);
        toast.error("process failed: ");
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
            <div className="mb-4 w-full">
              <p className="my-2">password</p>
              <input
                type="password"
                name="newPassword"
                className={`h-12 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700 ${errors.password && "border-red-500"}`}
                placeholder="please enter your password"
                value={formData.newPassword}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="mb-4 w-full">
              <p className="my-2">confirm password</p>
              <input
                type="password"
                name="confirmPassword"
                className={`h-12 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700 ${errors.password && "border-red-500"}`}
                placeholder="confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="mb-4 w-full">
              <button
                type="submit"
                className="w-full rounded bg-violet-700 p-4 text-sm text-white transition hover:bg-violet-800"
              >
                Resate
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}

export default ResetPassword;
