import axios from "axios";
export const getUser = async () => {
  axios.get("http://localhost:3001/").then(response => console.log(response));

  //   const res = await fetch("http://localhost:3001/");
  //   const data = await res.json();
  //   console.log(data);
};
