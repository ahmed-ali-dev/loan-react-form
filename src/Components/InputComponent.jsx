import React from "react";
import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputContext";

function InputComponent({ title, value, handleChange }) {
  const inputContext = useContext(LoanInputContext);
  return (
    <>
      <label htmlFor="name" className="mt-2 ">
        {inputContext.title}
      </label>
      <input
        type="text"
        value={inputContext.value}
        id=""
        className="p-2 rounded-md text-black w-full h-7 border-none cursor-pointer"
        onChange={(event) => {
          inputContext.handleChange(event.target.value);
        }}
      />
    </>
  );
}

export default InputComponent;
