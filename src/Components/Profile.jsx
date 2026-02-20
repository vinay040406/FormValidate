import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setItem } from "./Register";

const Profile = () => {
  const navigate = useNavigate();
  const logBtnRef = useRef();
  const [profileDetails, setProfileDetails] = useState({
    username: "",
    profilePicture: null,
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const data = JSON.parse(localStorage.getItem("Users"));
  const existingUsers = JSON.parse(localStorage.getItem("Users")) || [];
  const lastOne = existingUsers[existingUsers.length - 1];
  const handleLogOut = () => {
    setTimeout(() => {
      localStorage.removeItem("Users");
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    if (!data) return;
    setProfileDetails(() => ({
      username: lastOne.username,
      profilePicture: lastOne.profilePicture,
      lastname: lastOne.lastname,
      email: lastOne.email,
      password: lastOne.password,
      confirmPassword: lastOne.confirmPassword,
    }));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-screen bg-linear-to-br  flex items-center justify-center">
      {data ? (
        <div className="w-full flex ml-26 items-center">
          <div className="sidebar fixed min-h-screen flex flex-col items-center pt-50 lg:gap-15 left-0 top-0 px-8 bg-[rgba(17,45,73,1)]">
            <svg
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3001_21474)">
                <rect width="40" height="39" fill="#112D49" />
                <path
                  d="M20.0007 9.24625L28.334 16.5587V29.25H25.0007V19.5H15.0007V29.25H11.6673V16.5587L20.0007 9.24625ZM20.0007 4.875L3.33398 19.5H8.33398V32.5H18.334V22.75H21.6673V32.5H31.6673V19.5H36.6673L20.0007 4.875Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3001_21474">
                  <rect width="40" height="39" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3001_21477)">
                <rect width="40" height="40" fill="#112D49" />
                <path
                  d="M19.9993 36.6666C21.8327 36.6666 23.3327 35.1666 23.3327 33.3333H16.666C16.666 35.1666 18.166 36.6666 19.9993 36.6666ZM29.9993 26.6666V18.3333C29.9993 13.2166 27.2827 8.93329 22.4993 7.79996V6.66663C22.4993 5.28329 21.3827 4.16663 19.9993 4.16663C18.616 4.16663 17.4993 5.28329 17.4993 6.66663V7.79996C12.7327 8.93329 9.99935 13.2 9.99935 18.3333V26.6666L6.66602 30V31.6666H33.3327V30L29.9993 26.6666ZM26.666 28.3333H13.3327V18.3333C13.3327 14.2 15.8493 10.8333 19.9993 10.8333C24.1493 10.8333 26.666 14.2 26.666 18.3333V28.3333Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3001_21477">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3001_21480)">
                <rect width="40" height="39" fill="#112D49" />
                <path
                  d="M33.334 4.875H31.6673V1.625H28.334V4.875H11.6673V1.625H8.33398V4.875H6.66732C4.83398 4.875 3.33398 6.3375 3.33398 8.125V34.125C3.33398 35.9125 4.83398 37.375 6.66732 37.375H33.334C35.1673 37.375 36.6673 35.9125 36.6673 34.125V8.125C36.6673 6.3375 35.1673 4.875 33.334 4.875ZM33.334 34.125H6.66732V16.25H33.334V34.125ZM33.334 13H6.66732V8.125H33.334V13Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3001_21480">
                  <rect width="40" height="39" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3001_21483)">
                <rect width="40" height="40" fill="#112D49" />
                <path
                  d="M5.83398 30.8167L15.834 20.8L22.5007 27.4667L36.6673 11.5333L34.3173 9.18335L22.5007 22.4667L15.834 15.8L3.33398 28.3167L5.83398 30.8167Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3001_21483">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3001_21486)">
                <rect width="40" height="39" fill="#112D49" />
                <path
                  d="M19.9993 9.75C21.8327 9.75 23.3327 11.2125 23.3327 13C23.3327 14.7875 21.8327 16.25 19.9993 16.25C18.166 16.25 16.666 14.7875 16.666 13C16.666 11.2125 18.166 9.75 19.9993 9.75ZM19.9993 26C24.4993 26 29.666 28.0963 29.9993 29.25H9.99935C10.3827 28.08 15.516 26 19.9993 26ZM19.9993 6.5C16.316 6.5 13.3327 9.40875 13.3327 13C13.3327 16.5913 16.316 19.5 19.9993 19.5C23.6827 19.5 26.666 16.5913 26.666 13C26.666 9.40875 23.6827 6.5 19.9993 6.5ZM19.9993 22.75C15.5493 22.75 6.66602 24.9275 6.66602 29.25V32.5H33.3327V29.25C33.3327 24.9275 24.4493 22.75 19.9993 22.75Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3001_21486">
                  <rect width="40" height="39" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="min-h-screen py-15  w-1/4 flex flex-col items-center  border-r-[rgba(133,133,133,1)] border-r">
            <div className="flex gap-5 items-center ">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3001_21497)">
                  <path
                    d="M30.82 30.18L21.66 21L30.82 11.82L28 9L16 21L28 33L30.82 30.18Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3001_21497">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h3 className="text-[32px] font-bold">Profile</h3>
            </div>
            <div className="flex gap-5 mt-23 items-center justify-center">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3001_21502)">
                  <path
                    d="M26.3625 16.9125L28.0875 18.6375L11.1 35.625H9.375V33.9L26.3625 16.9125ZM33.1125 5.625C32.6437 5.625 32.1562 5.8125 31.8 6.16875L28.3687 9.6L35.4 16.6312L38.8312 13.2C39.5625 12.4688 39.5625 11.2875 38.8312 10.5563L34.4438 6.16875C34.0688 5.79375 33.6 5.625 33.1125 5.625ZM26.3625 11.6063L5.625 32.3438V39.375H12.6562L33.3937 18.6375L26.3625 11.6063Z"
                    fill="#1C1C1C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3001_21502">
                    <rect width="45" height="45" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[28px] font-bold cursor-pointer">
                Edit Profile
              </span>
            </div>
          </div>
          <div className="h-screen py-10 px-20 flex flex-col w-2/4">
            <div className="mt-15 flex justify-between items-center">
              <h2 className="font-semibold text-[45px]">Edit profile</h2>
              <img
                className="h-40 w-40 rounded-full object-cover bg-red-50"
                src={profileDetails.profilePicture}
                alt=""
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex profileForm flex-col space-y-2 mt-10 w-full "
            >
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2 w-75">
                  <label>First Name</label>
                  <input
                    readOnly
                    onChange={() => {}}
                    type="text"
                    value={profileDetails.username}
                    className="border-2 border-[rgba(133,133,133,1)] rounded-xl p-3 focus:outline-black"
                  />
                </div>
                <div className="flex flex-col gap-2 w-75">
                  <label>Last Name</label>
                  <input
                    readOnly
                    type="text"
                    onChange={() => {}}
                    value={profileDetails.lastname}
                    className=" border-2 border-[rgba(133,133,133,1)] rounded-xl p-3 focus:outline-black"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  readOnly
                  type="text"
                  onChange={() => {}}
                  value={profileDetails.email}
                  className=" border-2 border-[rgba(133,133,133,1)] rounded-xl p-3 focus:outline-black"
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  readOnly
                  type="text"
                  onChange={() => {}}
                  value={profileDetails.password}
                  className=" border-2 border-[rgba(133,133,133,1)] rounded-xl p-3 focus:outline-black"
                />
              </div>
              <div className="flex flex-col">
                <label>Confirm Password</label>
                <input
                  readOnly
                  type="text"
                  onChange={() => {}}
                  value={profileDetails.confirmPassword}
                  className=" border-2 border-[rgba(133,133,133,1)] rounded-xl p-3 focus:outline-black"
                />
              </div>
              <div className="flex flex-col">
                <label>Change Profile Picture</label>
                <input
                  type="file"
                  className=" border-2 border-[rgba(133,133,133,1)] rounded-xl p-3 focus:outline-black"
                />
              </div>
              <div className="mt-30 flex gap-5">
                <button className="px-10 py-3 border-[rgba(17,45,73,1)] border cursor-pointer rounded-xl">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-10 py-3 bg-[rgba(17,45,73,1)] text-white font-semibold cursor-pointer rounded-xl"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className="flex h-screen p-8 flex-col items-end w-1/4 ">
            <div className="flex items-center justify-end">
              <img
                onClick={() => {
                  logBtnRef.current.style.display = "block";
                }}
                className="h-10 w-10 rounded-full  cursor-pointer"
                src={profileDetails.profilePicture}
                alt=""
              />
              <span className="ml-5 font-bold ">
                {profileDetails.username.charAt(0).toUpperCase() +
                  profileDetails.lastname.charAt(0).toUpperCase()}
              </span>
            </div>

            <button
              onClick={handleLogOut}
              ref={logBtnRef}
              className="px-3 mt-5 py-1.5 border rounded-xl text-black text-md font-semibold hidden "
            >
              LogOut
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-6xl font-semibold text-center">
          No results found <br />
          <Link to={"/"}>
            <h2 className="text-2xl mt-4 underline ">Please Sign Up Here</h2>
          </Link>
        </h1>
      )}
    </div>
  );
};

export default Profile;
