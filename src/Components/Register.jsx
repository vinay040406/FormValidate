import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [imageSize, setImageSize] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Users"));
    if (data) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

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
      !formData.confirmPassword ||
      !formData.profilePicture
    ) {
      setErrors(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    setRegister(true);

    setTimeout(() => {
      // existingUsers.push(formData);
      localStorage.setItem("Users", JSON.stringify(formData));

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
              autoComplete="off"
              name="username"
              type="text"
              placeholder="Firstname"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {formData.username === "" && errors && (
              <p className="text-red-500 text-sm mt-1">UserName is required</p>
            )}
          </div>
          <div className="mb-4">
            <input
              autoComplete="off"
              name="lastname"
              type="text"
              placeholder="Lastname"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {formData.lastname === "" && errors && (
              <p className="text-red-500 text-sm mt-1">LastName is required</p>
            )}
          </div>
          <div className="mb-4">
            <input
              name="email"
              autoComplete="off"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {
              formData.email === "" && errors && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )
              // ||
              //   (errors && filteredEmails && (
              //     <p className="text-sm mt-1 text-red-500">
              //       Email already exists
              //     </p>
              //   ))
            }
          </div>
          <div className="mb-4 relative">
            <input
              name="password"
              type={show ? "text" : "password"}
              autoComplete="off"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full py-3 px-8 bg-[rgba(244,248,247,1)] rounded-4xl focus:outline-black"
            />
            {formData.password === "" && errors && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
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
              name="confirmPassword"
              type={show ? "text" : "password"}
              autoComplete="off"
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
            {(formData.confirmPassword === "" && errors && (
              <p className="text-red-500 text-sm mt-1">
                Confirm Password is required
              </p>
            )) ||
              (formData.password !== formData.confirmPassword && errors && (
                <p className="text-sm text-red-500 mt-1">Password Mismatch</p>
              ))}
          </div>
          <div className="mb-3 flex flex-col gap-3">
            <input
              type="file"
              // onChange={(e) => {
              //   const files = e.target.files[0];
              //   if (!files) return;
              //   const Image = URL.createObjectURL(files);
              //   setFormData((prev) => ({
              //     ...prev,
              //     profilePicture: Image,
              //   }));
              // }}
              accept=".png ,.jpg ,.jpeg"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;
                const SizeInMb = file.size / 1024 / 1024;
                setImageSize(SizeInMb);

                if (SizeInMb > 2) {
                  alert("Image size is greater than 2 mb");
                  setFormData({
                    ...formData,
                    profilePicture: null,
                  });
                  e.target.value = "";
                  return;
                }

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
              <p className="text-red-500 text-sm mt-1"> is required</p>
            )}
            <img
              className="w-1/2 block m-auto h-30 object-cover rounded-lg"
              src={formData.profilePicture}
              alt=""
            />
            <div className="flex justify-between my-1">
              <span>Max Image Size Allowed:2MB</span>
              {formData.profilePicture && (
                <span>{imageSize && imageSize.toFixed(2) + "MB"}</span>
              )}
            </div>
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
