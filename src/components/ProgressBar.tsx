import styled from "styled-components";

const OuterBar = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 2rem;
  background-color: #faa2c1;
  border: 3px solid #a61e4d;
  border-radius: 2.7rem;
  margin-bottom: 2.4rem;
`;

const InnerBar = styled.div`
  width: 30%;
  height: 100%;
  background-color: #e22567;
  border: 3px solid transparent;
  border-radius: 2.7rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    background-color: #e22567;
    border: 3px solid #fff;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    transform: translate(-50%, -50%);
  }
`;

export default function ProgressBar() {
  return (
    <OuterBar>
      <InnerBar />
    </OuterBar>
  );
}
