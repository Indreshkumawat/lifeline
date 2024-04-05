import axios from "axios";
const baseURL = "https://lifeline-mkxp.onrender.com";
//const baseURL = "http://localhost:3177/";

export default axios.create({ baseURL: baseURL });
