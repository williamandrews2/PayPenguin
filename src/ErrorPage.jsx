import { Link } from "react-router-dom";
import Header from "./components/Header";

const ErrorPage = () => {
  return (
    <div className="app-container-wrapper">
      <div className="app-container">
        <Header />
        <h1>Oh no, this route doesn't exist!</h1>
        <Link to="/">
          You can go back to the home page by clicking here, though!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
