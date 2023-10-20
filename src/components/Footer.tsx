import { AppBar, Link, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ padding: "0.9rem 0" }}>
      <Typography color="inherit" textAlign={"center"}>
        © All rights reserved
        <br />
        Made by <Favorite fontSize="small" sx={{color: "red", }}/>
        <Link
          href="https://github.com/MuminBashir"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          Mumin Bashir
        </Link>
      </Typography>
    </AppBar>
  );
};

export default Footer;
