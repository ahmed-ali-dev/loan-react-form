import { createContext } from "react";

export let LoanInputContext = createContext({
  lableTitle: "",
  handleChange: null,
  inputValue: null,
});
