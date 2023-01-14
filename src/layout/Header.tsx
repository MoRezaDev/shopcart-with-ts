import { Container, AppBar, Typography, Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./styles.css";
import DrawerMenu from "../components/DrawerMenu";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Container maxWidth="lg">
      <AppBar>
        <div className="appbar-container">
          <div className="appbar-contents">
            <Link to="/">
              <Typography>Home</Typography>
            </Link>
            <Link to="/store">
              <Typography>Store</Typography>
            </Link>
            <Link to="/about">
              <Typography>About</Typography>
            </Link>
          </div>
          <div onClick={() => setIsDrawerOpen(true)} className="circle">
            <AddShoppingCartIcon fontSize="large" />
            <div className="circle-inner">
              <span>3</span>
            </div>
          </div>
          <DrawerMenu
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>
      </AppBar>
    </Container>
  );
};

export default Header;
