import Container from "./Container";
import UserMenu from "./UserMenu";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav() {
  const onClick = () => {
    window.open("/courses", "_blank");
  };
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <span>DW</span>OS
          </div>
        </Link>
        <ul className={styles.menu}>
          <li>
            {/* 
              웹사이트에서 메뉴를 클릭하면 강조되는 효과가 있다. 
              NavLink 를 사용하여 구현하자.
              NavLink 는 style 이라는 prop 으로 함수를 내려줄 수 있다. 
            */}
            <NavLink to="/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>
          {/* <li>
            <NavLink style={getLinkStyle} onClick={onClick}>
              구글로이동~
            </NavLink>
          </li> */}
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
