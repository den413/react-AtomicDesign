import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "toru",
  image: "https://source.unsplash.com/WX4i1Jq_o0Y",
  email: "adg@fgef.com",
  phone: "000-9354-8216",
  company: {
    name: "aaaaa会社"
  },
  website: "https://google.com"
};

export const App = () => {
  return <Router />;
};
