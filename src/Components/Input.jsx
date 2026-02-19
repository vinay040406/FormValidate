import React, { useState, useRef } from "react";

const Input = (e) => {
  const inputRef = useRef();
  const [image, setImage] = useState();

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  // const reader = new FileReader(6);
  // reader.onload = (e) => {
  //   setImage(e.target.result);
  // };
  // reader.readAsDataURL(file);

  return (
    <div className="h-screen w-full justify-center items-center p-5">
      <img
        onClick={() => {
          inputRef.current?.click();
        }}
        className="h-full w-full p-5 object-cover text-4xl text-orange-400 cursor-pointer"
        src={image ? URL.createObjectURL(image) : ""}
        alt="select image"
      />
      <input
        onChange={(e) => handleChange(e)}
        ref={inputRef}
        className="hidden"
        type="file"
      />
    </div>
  );
};

export default Input;
