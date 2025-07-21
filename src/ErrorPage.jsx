import { Link } from "react-router-dom";
import Header from "./components/Header";
import confusedPenguin from "./assets/confused-penguin.png";
import "./styles/errorPage.css";

const ErrorPage = () => {
  return (
    <div className="app-container-wrapper">
      <div className="app-container">
        <Header />
        <h1>Uh oh, this page doesn't exist!</h1>
        <Link to="/">
          You can go back to the home page by clicking here, though!
        </Link>
        {/* <img
          className="error-page-img"
          src={confusedPenguin}
          alt="confused-penguin"
        /> */}
      </div>
    </div>
  );
};

export default ErrorPage;
