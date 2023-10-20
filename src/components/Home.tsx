import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type languageType = {
  name: string;
  code: string;
};

const languages: languageType[] = [
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "French",
    code: "fr",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "Japanese",
    code: "ja",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const languageSelectHandler = (language: string): void => {
    navigate(`/learning?language=${language}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h5"
        p={"2rem"}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Welcome to Reverb. <br/> A platfrom for learning new languages
      </Typography>

      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {languages.map((item) => (
          <Button
            key={item.code}
            variant="contained"
            onClick={() => languageSelectHandler(item.code)}
          >
            {item.name}
          </Button>
        ))}
      </Stack>

      <Typography textAlign={"center"} variant="h6">
        Choose a language to learn
      </Typography>
    </Container>
  );
};

export default Home;
