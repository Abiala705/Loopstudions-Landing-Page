import OffCanvas from "../../components/UI/OffCanvas";
import logo from "../../images/logo.svg";
import Button from "react-bootstrap/Button";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div bg="light" expand="lg" className="py-3 row col-12">
      <div className="row col-12 justify-content-between">
        <div href="#home" className="col-4 col-md-2 pt-2 mt-4 mt-md-0">
          <img src={logo} className="logo" />
        </div>

        <OffCanvas className="col-2" />

        <nav class="d-none d-md-block col-6 ms-auto">
          <ul className="row ms-auto">
            <li className="col-2 pt-2">
              <a href="#about">About</a>
            </li>
            <li className="col-2 pt-2">
              <a href="#careers">Careers</a>
            </li>
            <li className="col-2 pt-2">
              <a href="#events">Events</a>
            </li>
            <li className="col-2 pt-2">
              <a href="#products">Products</a>
            </li>
            <li className="col-2 pt-2">
              <a href="#support">Support</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
