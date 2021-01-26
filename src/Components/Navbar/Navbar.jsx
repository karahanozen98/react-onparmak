import React, { useState } from "react";
import scrollIntoSection from "../ScrollIntoSection/ScrollIntoSection";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function TopBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        style={{ overflow: "hidden", padding: "20px", background: "#1c1c1c" }}
        dark
      >
        <h1 style={{ color: "#fff", fontSize: "2.2rem" }}>
          ON PARMAK EĞİTİM VE UYGULAMALARI
        </h1>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink onClick={() => scrollIntoSection("onparmak")}>
                On Parmak Nedir?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollIntoSection("egzersizler")}>
                Egzersizler
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default TopBar;
