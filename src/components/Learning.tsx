import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader } from ".";
import {
  clearState,
  getWordsFailure,
  getWordsRequest,
  getWordsSuccess,
} from "../redux/slices";
import { textToAudio, translateWords } from "../utils/features";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const [audioSrc, setAudioSrc] = useState<string>("");
  const [audioDisable, setAudioDisable] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const params = useSearchParams()[0].get("language") as LangType;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, words } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
  };

  const playAudio = async () => {
    setAudioDisable(true);
    const data = await textToAudio(words[count]?.word, params);
    setAudioSrc(data);
    if (audioRef.current) {
      audioRef.current.play();
    }
    setAudioDisable(false);
  };

  useEffect(() => {
    dispatch(getWordsRequest());
    translateWords(params || "hi")
      .then((arr) => dispatch(getWordsSuccess(arr)))
      .catch((err) => dispatch(getWordsFailure(err)));

    if (error) {
      navigate("/error");
      dispatch(clearState());
    }
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Container maxWidth={"sm"} sx={{ p: "2rem", height: "79.3vh" }}>
      {audioSrc && <audio ref={audioRef} src={audioSrc} />}
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
        <Button
          onClick={playAudio}
          sx={{ borderRadius: "50%" }}
          disabled={audioDisable}
        >
          <VolumeUp />
        </Button>
      </Stack>
      <Button
        variant="contained"
        fullWidth
        sx={{ margin: "2rem 0" }}
        onClick={
          count === words.length - 1 ? () => navigate("/quiz") : nextHandler
        }
      >
        {count === words.length - 1 ? "Take Test" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
