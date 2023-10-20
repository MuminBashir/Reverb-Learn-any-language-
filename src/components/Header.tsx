import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const style = { textDecoration: "none", color: "beige", marginRight: "1rem" };

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" mr={"auto"}>
          <Link style={style} to={"/"}>
            REVERB
          </Link>
        </Typography>
        <Link style={style} to={"/"}>
          Home
        </Link>
        <Link style={style} to={"/about"}>
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
