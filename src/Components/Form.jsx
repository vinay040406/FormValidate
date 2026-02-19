import React, { useState, useEffect } from "react";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });
  const [tableArray, setTableArray] = useState([]);
  const [errors, setErrors] = useState(false);
  const [show, setShow] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(true);
    if (
      !userDetails.username ||
      !userDetails.lastname ||
      !userDetails.email ||
      !userDetails.password ||
      !userDetails.confirmPassword
    ) {
      return;
    }
    if (filteredEmail.length > 0) {
      return;
    }
    if (userDetails.password !== userDetails.confirmPassword) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const updatedArray = [...tableArray, userDetails];
      setTableArray(updatedArray);
      setItem(updatedArray);
      setAddUser(false);
      setLoading(false);
      setErrors(false);
    }, 2000);
  };

  const filteredEmail = tableArray.filter((f) => {
    return f.email.toLowerCase() === userDetails.email.toLowerCase();
  });

  function setItem(data) {
    return localStorage.setItem("userDetails", JSON.stringify(data));
  }

  function getItem() {
    const data = localStorage.getItem("userDetails");
    return data ? JSON.parse(data) : [];
  }

  useEffect(() => {
    const savedData = getItem();
    if (savedData && savedData.length > 0) {
      setTableArray(savedData);
    }
  }, []);

  return (
    <>
      <div className="h-screen  w-screen   justify-center flex-col items-center flex">
        {!addUser ? (
          <div className="w-full flex flex-col items-center">
            <h1 className="text-5xl font-semibold mb-3">Users Details:-</h1>
            <div className="flex shadow-[0_0_10px_5px_rgba(0,0,0,0.3)] rounded-xl flex-col gap-3 items-start">
              <div className="flex gap-5 flex-wrap p-5 ">
                {tableArray.length ? (
                  tableArray.map((data, index) => {
                    return (
                      <div
                        className="w-100 border-2 rounded-lg p-3"
                        key={index}
                      >
                        <img className="h-20 w-20 rounded-full mb-2 object-cover" src={data.profilePicture} alt="" />
                        <p className="text-2xl font-semibold w-20 ">
                          ID : {index + 1}
                        </p>
                        <p className=" text-2xl font-semibold">
                          Username :- {data.username}
                        </p>
                        <p className=" text-2xl font-semibold ">
                          Lastname:- {data.lastname}
                        </p>
                        <p className=" text-2xl font-semibold">
                          Email:- {data.email}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <p className="flex flex-col items-center justify-center text-3xl text-red-900">
                    <img
                      className="h-40 w-40"
                      src="https://imgs.search.brave.com/AHOzvfaRk5gLDctPXpNDGMi0ZVobMXhgOsmhRBjZn4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/MzU0LzgwMS9zbWFs/bC9zZWFyY2gtbm90/LWZvdW5kLW5vLXJl/c3VsdC1kYXRhLW9y/LWluZm9ybWF0aW9u/LW5vdC1hdmFpbGFi/bGUtY29uY2VwdC1m/cmVlLXZlY3Rvci5q/cGc"
                      alt=""
                    />
                    <span> No Records Found</span>
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                setUserDetails({
                  username: "",
                  lastname: "",
                  email: "",
                  password: "",
                });
                setErrors(false);
                setAddUser(true);
              }}
              className="w-40 py-3 bg-gray-400 text-3xl rounded-xl cursor-pointer mb-20 mt-4"
            >
              Add User
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4 ease-in py-10 px-15 rounded-xl  shadow-[0_0_20px_10px_rgba(0,0,0,0.1)]"
            onSubmit={handleSubmit}
          >
            <h1 className={`text-6xl`}>Fill Details:-</h1>
            <input
              name="username"
              placeholder="Enter Your Username"
              value={userDetails.username}
              onChange={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
              type="text"
              className={`py-2 ${errors && userDetails.username === "" ? "border border-red-500" : "border"}`}
            />
            {errors && userDetails.username === "" ? (
              <p className="text-red-500">This is required</p>
            ) : (
              ""
            )}
            <input
              name="lastname"
              value={userDetails.lastname}
              placeholder="Enter Your LastName"
              onChange={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  lastname: e.target.value,
                }));
              }}
              type="text"
              className={`py-2 ${errors && userDetails.lastname === "" ? "border border-red-500" : "border"}`}
            />
            {errors && userDetails.lastname === "" ? (
              <p className="text-red-500">This is required</p>
            ) : (
              ""
            )}
            <input
              name="email"
              value={userDetails.email}
              placeholder="Enter Your Email"
              onChange={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              type="text"
              className={`py-2 ${errors && userDetails.email === "" ? "border border-red-500" : "border"}`}
            />
            {errors && userDetails.email === "" ? (
              <p className="text-red-500">This is required</p>
            ) : (
              ""
            )}
            {filteredEmail && filteredEmail.length > 0 && (
              <p className="text-red-500">Email already Exists</p>
            )}
            <div className="relative">
              <input
                name="password"
                value={userDetails.password}
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setUserDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                style={{
                  paddingRight: "60px",
                }}
                type={show ? "text" : "password"}
                className={`py-2 w-full  ${errors && userDetails.password === "" ? "border border-red-500 " : "border"}`}
              />
              <p
                className="absolute top-2 cursor-pointer right-3.5"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? "Hide" : "Show"}
              </p>
              {errors && userDetails.password === "" ? (
                <p className="text-red-500">This is required</p>
              ) : (
                ""
              )}
            </div>
            <input
              name="confirmPassword"
              type={show ? "text" : "password"}
              placeholder="Confirm Your Password"
              value={userDetails.confirmPassword}
              className={` py-2 ${errors && userDetails.confirmPassword === "" ? "border border-red-500" : "border"}`}
              onChange={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }));
              }}
            />
            {errors && userDetails.confirmPassword === "" ? (
              <p className="text-red-500">This is required</p>
            ) : (
              ""
            )}
            {errors &&
            userDetails.confirmPassword &&
            userDetails.password !== userDetails.confirmPassword ? (
              <p className="text-red-500">Password Mismatch</p>
            ) : (
              ""
            )}
            <label>
              <input
                type="file"
                name="Select Image"
                className="border py-2"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const image = URL.createObjectURL(file);
                  setUserDetails({
                    ...userDetails,
                    profilePicture: image,
                  });
                }}
              />
              <img
                className="h-40 w-full mt-3 rounded-xl objext-cover"
                src={userDetails.profilePicture}
                alt=""
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="py-4 btn rounded-xl cursor-pointer hover:bg-red-400 hover:active:bg-red-500 bg-red-300 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Form;
