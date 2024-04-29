import { Link, useLocation } from "react-router-dom";
import { HeaderLogo } from "../../assets";
import "./header.css";
import Search from "./Search";


const header_data = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
];

const Header = () => {
const {pathname}= useLocation();


  return (
    <header className="header">
      <div className="header_container">

        <Link to={"/"}>
        
        <div className="header_logo">


          <img src={HeaderLogo} alt="" />
          <h1>
            Cine<span className="helperText">Park</span>
          </h1>
        </div>

        </Link >
        <nav>
          <ul className="nav_menu">
            {header_data?.map((item, idx) => (
              <li className="nav_item" key={idx}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
            {pathname === "/" &&
            <li >
            <Search/>
            </li>
}
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
