import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  const [errors, setErrors] = useState(false);
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.lastname ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setErrors(true);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    setRegister(true);

    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem("Users")) || [];
      existingUsers.push(formData);
      localStorage.setItem("Users", JSON.stringify(existingUsers));

      setFormData({
        username: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePicture: null,
      });

      setErrors(false);
      setRegister(false);

      e.target.reset();
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen  w-full flex items-center justify-center bg-white ">
      <div className="max-w-147.5 w-full flex-col p-10 shadow-[0_0_10px_20px_rgba(0,0,0,0.1)] flex itemes-center  justify-center rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl text-center block m-auto "
        >
          <h2 className="text-3xl mb-2 text-center font-bold">Sign Up</h2>
          <p className="text-md leading-6 mb-4">
            Create your account to unlock access and stay updated with
            everything we offer.
          </p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Firstname"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {formData.username === "" && errors && (
              <p className="text-red-500 text-sm mt-1">This is required</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Lastname"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {formData.lastname === "" && errors && (
              <p className="text-red-500 text-sm mt-1">This is required</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {formData.email === "" && errors && (
              <p className="text-red-500 text-sm mt-1">This is required</p>
            )}
          </div>
          <div className="mb-4 relative">
            <input
              type={show ? "text" : "password"}
              autoComplete="false"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {formData.password === "" && errors && (
              <p className="text-red-500 text-sm mt-1">This is required</p>
            )}
            <span
              onClick={() => {
                setShow(!show);
              }}
              className="absolute right-3 cursor-pointer top-3"
            >
              {show ? "Hide" : "Show"}
            </span>
          </div>
          <div className="mb-6">
            <input
              type={show ? "text" : "password"}
              autoComplete="false"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {formData.confirmPassword === "" && errors && (
              <p className="text-red-500 text-sm mt-1">This is required</p>
            )}
            {formData.password !== formData.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">Password Mismatches</p>
            )}
          </div>
          <div className="mb-3   flex flex-col gap-3">
            <input
              type="file"
              // onChange={(e) => {
              //   const files = e.target.files[0];
              //   const Image = URL.createObjectURL(files);
              //   setFormData(() => ({
              //     ...formData,
              //     profilePicture: Image,
              //   }));
              // }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();

                reader.onloadend = () => {
                  setFormData((prev) => ({
                    ...prev,
                    profilePicture: reader.result,
                  }));
                };

                reader.readAsDataURL(file);
              }}
              className="w-full p-3 border rounded-lg"
            />
            {formData.profilePicture === null && errors && (
              <p className="text-red-500 text-sm mt-1">This is required</p>
            )}
            <img
              className="w-1/2 block m-auto h-30 object-cover rounded-lg"
              src={formData.profilePicture}
              alt=""
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[rgba(17,45,73,1)] text-white mt-1 py-5 rounded-2xl text-2xl hover:scale-101 duration-300 ease-in hover:bg-[rgb(26,58,123)] cursor-pointer"
          >
            {register ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="block m-auto mt-4 text-[rgba(65,87,109,1)] text-lg">
          Already a member?{" "}
          <Link to={"/login"}>
            <span className="text-[rgba(17,45,73,1)] text-xl font-semibold underline">
              Log in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

export const getItem = () => {
  JSON.parse(localStorage.getItem("Users"));
};

export const setItem = (val) => {
  localStorage.setItem("Users", JSON.stringify(val));
};
