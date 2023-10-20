import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Button, Typography, Stack } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { VolumeUp } from "@mui/icons-material";
import { translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getWordsFailure,
  getWordsRequest,
  getWordsSuccess,
} from "../redux/slices";
import { Loader } from ".";

const Learning = () => {
  const [count, setCount] = useState<number>(0);

  const params = useSearchParams()[0].get("language") as LangType;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, words } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getWordsRequest());
    translateWords(params || "hi")
      .then((arr) => dispatch(getWordsSuccess(arr)))
      .catch((err) => dispatch(getWordsFailure(err)));

    if (error) {
      alert(error);
      dispatch(clearState());
    }
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Container maxWidth={"sm"} sx={{ p: "1rem" }}>
      <Button
        onClick={
          count === 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)
        }
      >
        <ArrowBack />
      </Button>

      <Typography m={"1rem 0 1.5rem 0"}>Learning new words</Typography>

      <Stack direction={"row"} spacing={"1rem"}>
        <Typography variant="h4">
          {count + 1} - {words[count]?.word}
        </Typography>
        <Typography variant="h4" color={"blue"}>
          : {words[count]?.meaning}
        </Typography>
        <Button sx={{ borderRadius: "50%" }}>
          <VolumeUp />
        </Button>
      </Stack>
      <Button
        variant="contained"
        fullWidth
        sx={{ margin: "2rem 0" }}
        onClick={count === words.length-1 ? () => navigate("/quiz") : nextHandler}
      >
        {count === words.length-1 ? "Take Test" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
