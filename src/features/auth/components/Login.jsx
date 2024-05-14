import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../authApiSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setCredentials } from "../authSlice";
import { ImSpinner2 } from "react-icons/im";
function Login() {
  const [formData, setFormData] = useState({
    email: "tenant2@example1.com",
    password: "password1234",
  });
  const [errors, setErrors] = useState({});
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, userData } = useSelector((state) => state.auth);
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

    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
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
        const response = await login(formData);
        if (response.error) {
          toast.error(response.error.data.error);
        } else {
          if (response.data.error) {
            toast.error(response.data.error);
          } else {
            dispatch(setUser(response.data));
            dispatch(setCredentials(response.data));
            const { message } = response.data;
            toast.success(message);
            setFormData({
              email: "",
              password: "",
            });
            navigate("/");
          }
        }
      } catch (error) {
        console.error("login error:", error);
        toast.error("login failed: " + error.message);
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
                <span className="text-violet-700">Login</span> in to your Acount
              </h1>
              <p className=" text-center">
                welcome Back please fill your credentials
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
              <p className="my-2">password</p>
              <input
                type="password"
                name="password"
                className={`h-12 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700 ${errors.password && "border-red-500"}`}
                placeholder="please enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <button
                type="submit"
                className="w-full rounded bg-violet-700 p-4 text-sm text-white transition hover:bg-violet-800"
              >
                Login
              </button>
            </div>
            <div className="mb-4 flex w-full flex-col justify-between gap-3 lg:flex-row lg:gap-0">
              <div className="flex gap-2">
                <p className="">still don't have account ?</p>
                <Link to="/signup" className="text-violet-700">
                  Sign up
                </Link>
              </div>
              <Link to="/forgot-password" className="text-red-500">
                Forgot password
              </Link>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}

export default Login;
