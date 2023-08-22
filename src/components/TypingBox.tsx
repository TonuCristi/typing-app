import styled from "styled-components";
import * as S from "../styles";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
import { randStr } from "../utils/randStr";

const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 1.2rem 2.4rem;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const TypingText = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-align: center;
`;

const Wrapper = styled.div`
  border: 3px solid #fff;
  border-radius: 2.7rem;
  width: 100%;
  padding: 2.4rem;
  margin-bottom: 2.4rem;
`;

const TextToType = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 2.4rem;
`;

const Char = styled.div`
  background-color: rgb(73, 80, 87);
  width: 1.5rem;
  text-align: center;
`;

const Stats = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const StatBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 900;
`;

const Ltm = styled(S.Stat)``;

const Time = styled(S.Stat)``;

const Accuracy = styled(S.Stat)``;

const RetryBtn = styled.button`
  border: none;
  background: none;
  font-family: inherit;
  font-size: 1.6rem;
  background-color: #e22567;
  color: #fff;
  padding: 0.8rem 2.4rem;
  border-radius: 2.7rem;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  align-self: center;
`;

export default function TypingBox() {
  const [string, setString] = useState(randStr().split(""));
  const [stringSplit, setStringSplit] = useState(
    string.map((val, i) => {
      return { index: i, char: val.toLowerCase(), checked: false };
    })
  );
  const [char, setChar] = useState("");

  const charVerify = (chr: string) => {
    return stringSplit.map((charToVerify) =>
      charToVerify.char === chr
        ? {
            index: charToVerify.index,
            char: charToVerify.char,
            checked: true,
          }
        : {
            index: charToVerify.index,
            char: charToVerify.char,
            checked: charToVerify.checked,
          }
    );
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setChar(e.key);
      setStringSplit(charVerify(e.key));
    });
    console.log(stringSplit);
  }, [char]);

  return (
    <Container>
      <TypingText>Start by typing...</TypingText>
      <Wrapper>
        <ProgressBar />
        <TextToType>
          {string.map((val, i) => (
            <Char key={i}>{val}</Char>
          ))}
        </TextToType>
        <Stats>
          <StatBox>
            ltm
            <Ltm>30 </Ltm>
          </StatBox>
          <StatBox>
            time
            <Time>00 : 00</Time>
          </StatBox>
          <StatBox>
            Accuracy
            <Accuracy>35%</Accuracy>
          </StatBox>
        </Stats>
      </Wrapper>
      <RetryBtn
        onClick={() => {
          setString(randStr().split(""));
        }}
      >
        Retry
      </RetryBtn>
    </Container>
  );
}
