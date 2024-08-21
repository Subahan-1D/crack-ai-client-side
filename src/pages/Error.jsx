import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import img from "../assets/404.gif"

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Header></Header>
      <div className="flex min-h-screen items-center justify-center">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Error;
