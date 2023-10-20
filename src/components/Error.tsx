import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
        <Typography variant="h4" gutterBottom>
          Oops, something went wrong!
        </Typography>
        <Typography variant="body1" paragraph>
          Could not fetch the data
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Retry
        </Button>
      </Paper>
    </Box>
  );
};

export default Error;
