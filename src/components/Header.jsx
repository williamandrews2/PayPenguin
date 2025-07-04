import logo from "../assets/penguinlogo2.png";

function Header() {
  return (
    <>
      <header>
        <div className="branding">
          <img src={logo} alt="logo" />
          <h1>PayPenguin</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
