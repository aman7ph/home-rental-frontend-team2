import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
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
  const handleSubmit = () => {
    console.log(email);
  };
  return (
    <div className="border-t p-12">
      <div className="flex flex-wrap justify-between gap-12  sm:flex-row">
        <div className="flex flex-col justify-center gap-6 p-4">
          <Link to="/">
            <img src={logo} alt="keray" className="w-30 h-5" />
          </Link>

          <div className="flex flex-col gap-4 text-lg">
            <div className="flex items-center gap-4 ">
              <CiLocationOn className=" text-violet-500 hover:text-violet-700" />
              <p>Bole,Megenaga-zmefes blg</p>
            </div>

            <div className="flex items-center gap-4 ">
              <CiPhone className=" text-violet-500 hover:text-violet-700" />
              <Link to="tel:994">+251-912-345-6789</Link>
            </div>
            <div className="flex items-center gap-4 ">
              <MdOutlineAttachEmail className=" text-violet-500 hover:text-violet-700" />
              <Link to="mailto:marakiBetoch@gmail.com">
                marakiBetoch@gmail.com
              </Link>
            </div>
          </div>
          <div className=" text-lg ">
            <h3 className="font-semibold	">follow us on</h3>
            <div className="my-3 flex gap-3">
              <Link to="/">
                <SlSocialFacebook className="m-3 text-violet-500 hover:text-violet-700" />
              </Link>
              <Link to="/">
                <SlSocialInstagram className="m-3 text-violet-500 hover:text-violet-700" />
              </Link>
              <Link to="/">
                <SlSocialTwitter className="m-3 text-violet-500 hover:text-violet-700" />{" "}
              </Link>
              <Link to="/">
                <PiTelegramLogoLight className="m-3 text-violet-500 hover:text-violet-700" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 p-3">
          <h3 className="font-semibold">Company</h3>
          <Link to="/">About Us</Link>
          <Link to="/">Privecy & Policy</Link>
          <Link to="/">Payment Methodes</Link>
        </div>
        <div className="flex w-[300px] flex-col">
          <h3 className="font-semibold">Join Our Newslatter</h3>
          <form>
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
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
