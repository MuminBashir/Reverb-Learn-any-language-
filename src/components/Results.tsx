import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../redux/slices";
import { useNavigate } from "react-router-dom";
import { scoreCounter } from "../utils/features";

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { words, result } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const score = scoreCounter(
    words.map((i) => i.meaning),
    result
  );
  const percentage = Math.ceil((score / words.length) * 100);

  const resetHandler = (): void => {
    navigate("/");
    dispatch(clearState);
  };

  if(words.length === 0) return <Container maxWidth={"sm"}>
    <Typography variant="h3" color={"primary"} m={"2rem 0"}>
        Result
      </Typography>
      <Typography variant="h6" m={"1rem 0"} textAlign={"center"}>
       No result to show.
      </Typography>
      <Button
        onClick={resetHandler}
        variant="contained"
        sx={{ textAlign: "center", m: "1rem 0" }}
      >
        Reset
      </Button>
  </Container>

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" color={"primary"} m={"2rem 0"}>
        Result
      </Typography>
      <Typography variant="h6" m={"1rem 0"}>
        You got <span style={{ color: "green" }}>{score}</span> right and{" "}
        <span style={{ color: "red" }}>{words.length - score}</span> wrong out
        of {words.length}
      </Typography>
      <Stack direction={"row"} justifyContent={"space-evenly"} mt={"1rem"}>
        <Stack gap={"1rem"}>
          <Typography variant="h5">Your Answer</Typography>
          {result.map((i, idx) => (
            <Typography key={idx}>
              {idx + 1} - {i}
            </Typography>
          ))}
        </Stack>
        <Stack gap={"1rem"}>
          <Typography variant="h5">Correct Answer</Typography>
          {words.map((i, idx) => (
            <Typography key={idx}>
              {idx + 1} - {i.meaning}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Typography variant="h6" mt={"2rem"}>
        Percentage: {percentage}%
      </Typography>
      <Typography
        variant="h5"
        color={percentage > 40 ? "green" : "red"}
        mb={"2rem"}
      >
        {percentage > 40 ? "Pass" : "Fail"}
      </Typography>
      <Button
        onClick={resetHandler}
        variant="contained"
        sx={{ textAlign: "center", mb: "1rem" }}
      >
        Reset
      </Button>
    </Container>
  );
};

export default Results;
