import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack,
} from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveResult } from "../redux/slices";

const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [ans, setAns] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { words } = useSelector((state: { root: StateType }) => state.root);

  const nextHandler = (): void => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  };

  useEffect(() => {
    dispatch(saveResult(result));
    if (count === words.length) {
      navigate("/results");
    }
  }, [result]);

  return (
    <Container maxWidth="sm" sx={{ p: "1rem" }}>
      <Typography m={"2rem 0"}>Quiz</Typography>

      <Stack direction={"row"} spacing={"1rem"}>
        <Typography variant="h4">
          {count + 1} - {words[count]?.word}
        </Typography>
        <Button sx={{ borderRadius: "50%" }}>
          <VolumeUp />
        </Button>
      </Stack>

      <FormControl>
        <FormLabel sx={{ mt: "2rem", mb: "1rem" }}>Meaning</FormLabel>

        <RadioGroup value={ans} onChange={(e) => setAns(e.target.value)}>
          {words[count]?.options.map((i, idx) => (
            <FormControlLabel
              value={i}
              control={<Radio />}
              label={i}
              key={idx}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        fullWidth
        sx={{ m: "2rem 0" }}
        disabled={ans === ""}
        onClick={nextHandler}
      >
        {count === words.length - 1 ? "Submit" : "Next"}
      </Button>
    </Container>
  );
};

export default Quiz;
