import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Email:", formData.email);
      console.log("Password:", formData.password);
    }
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
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
          <div className="mb-4 flex w-full gap-2">
            <p className="">still don't have account ?</p>
            <Link to="/signup" className="text-violet-700">
              Sign up
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
