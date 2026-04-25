import { useNavigate } from "react-router-dom";
import logo from "../assets/penguinlogo2.webp";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { token, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="branding">
          <img src={logo} alt="logo" />
          <h1>
            <a href="/">PayPenguin</a>
          </h1>
        </div>
        <nav>
          <ul>
            {token ? (
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <a href="login" className="login-btn">
                  Login
                </a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
