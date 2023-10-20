import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";

const generateMcq = (meanings: { text: string }[], idx: number): string[] => {
  const correctAns: string = meanings[idx].text;

  const meaningsExceptAns = meanings.filter((i) => {
    return i.text !== correctAns;
  });

  const wrongOptions: string[] = _.sampleSize(meaningsExceptAns, 3).map(
    (i) => i.text
  );

  const mcqOptions: string[] = _.shuffle([...wrongOptions, correctAns]);
  return mcqOptions;
};

export const translateWords = async (param: LangType): Promise<WordType[]> => {
  try {
    const key = import.meta.env.VITE_RAPID_API_KEY1;

    const words = generate(8).map((i) => ({
      text: i,
    }));

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": param,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const receive: FetchedDataType[] = response.data;

    const arr: WordType[] = receive.map((i, idx) => {
      const options: string[] = generateMcq(words, idx);
      return {
        word: i.translations[0].text,
        meaning: words[idx].text,
        options: options,
      };
    });

    return arr;
  } catch (error) {
    console.error(error);
    throw new Error("some error");
  }
};

export const scoreCounter = (words: string[], result: string[]): number => {
  if (words.length !== result.length)
    throw new Error("Word and result array doesn't match");

  let count = 0;

  words.forEach((i, idx) => {
    if (i === result[idx]) count++;
  });

  return count;
};

export const textToAudio = async (
  text: string,
  language: LangType
): Promise<string> => {
  try {
    const apiKey = import.meta.env.VITE_RAPID_API_KEY2;
    const key = import.meta.env.VITE_VOICE_KEY;

    const encodedParams = new URLSearchParams({
      src: text,
      r: "0",
      c: "mp3",
      f: "8khz_8bit_mono",
      b64: "true",
    });

    if (language === "ja") encodedParams.set("hl", "ja-jp");
    else if (language === "es") encodedParams.set("hl", "es-es");
    else if (language === "fr") encodedParams.set("hl", "fr-fr");
    else encodedParams.set("hl", "hi-in");

    const { data }: { data: string } = await axios.post(
      "https://voicerss-text-to-speech.p.rapidapi.com/",
      encodedParams,
      {
        params: {
          key,
        },
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
