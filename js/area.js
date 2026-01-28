import { getData } from "../utils.js";
const data = window.location.pathname.split("/");
const flagData = await fetch("../data/areas.json");
const res = await flagData.json();
getData(data, res);
