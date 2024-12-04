import { useEffect, useState } from "react";
import "./Navbar.css";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import logotext from "../../assets/Xavinex logo with left alignment-05.png"

export default function Navbar() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div className={`navbar`}>
      <div className="logo text-3xl">
        {" "}
        <Link to="/">
        <img src={logotext} alt="" />
        
        </Link>
      </div>

      <div className="links">
        {isMobile ? (
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
            className="menu-button"
          />
        ) : (
          <div className="links">
            <ul>
              <Link to="service">
                <li>Services</li>
              </Link>
              <Link to="case-studies">
                <li>Case Studies</li>
              </Link>
              <Link to="hire-expert">
                <li>Hire Expert</li>
              </Link>
              <Link to="resources">
                <li>Resources</li>
              </Link>
            </ul>
          </div>
        )}

        <div className="callmeeting">
          <button>Schedule a Call</button>
        </div>

        <Drawer
          title="Navigation"
          placement="right"
          onClose={toggleDrawer}
          visible={isDrawerVisible}
        >
          <ul className="drawer-links">
            <Link to="service">
              <li>Services</li>
            </Link>
            <Link to="case-studies">
              <li>Case Studies</li>
            </Link>
            <Link to="hire-expert">
              <li>Hire Expert</li>
            </Link>
            <Link to="resources">
              <li>Resources</li>
            </Link>
          </ul>
        </Drawer>
      </div>
    </div>
  );
}
