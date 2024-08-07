import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";

export default function Products() {
  return (
    <>
      <nav className="rrc-products-nav rrc-margin">
        <NavLink
          to="/products/computer"
          className={({ isActive }) =>
            isActive ? "rrc-products-nav-link rrc-active-link" : " rrc-products-nav-link "
          }
        >
          Computadores
        </NavLink>
        <NavLink
          to="/products/eletronics"
          className={({ isActive }) =>
            isActive ? "rrc-products-nav-link rrc-active-link" : " rrc-products-nav-link "
          }
        >
          Eletronicos
        </NavLink>
        <NavLink
          to="/products/books"
          className={({ isActive }) =>
            isActive ? "rrc-products-nav-link rrc-active-link" : " rrc-products-nav-link "
          }
        >
          Livros
        </NavLink>
      </nav>
      <Outlet/>
    </>
  );
}
