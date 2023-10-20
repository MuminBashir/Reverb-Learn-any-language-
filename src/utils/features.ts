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
          "X-RapidAPI-Key":
            "fed7630b2dmsh6d4649837439604p19f4a0jsn77fad645c2ad",
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
