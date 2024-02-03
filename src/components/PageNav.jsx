import { NavLink } from "react-router-dom";
import hello from "./PageNav.module.css";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={hello.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
