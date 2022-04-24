import logo from "./images/logo.png";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-white ps-5 shadow-lg p-3 mb-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" className="img-fluid logo" />
          </a>
        </div>
      </nav>
    </>
  );
}
