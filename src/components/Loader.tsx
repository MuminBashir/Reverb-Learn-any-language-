import { CircularProgress, Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={"90vh"}
      justifyContent={"center"}
    >
      <CircularProgress color="primary" size={60} thickness={5} />
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ marginTop: "10px" }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default Loader;
