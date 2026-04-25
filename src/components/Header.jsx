import { useNavigate } from "react-router-dom";
import logo from "../assets/penguinlogo2.webp";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { token, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="branding">
          <img src={logo} alt="logo" />
          <h1>PayPenguin</h1>
        </div>
        <nav>
          <ul>
            {token ? (
              <li>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <a href="login">Login</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
