import styled from "styled-components";
import * as S from "./styles";

const Container = styled.div`
  background: rgb(7, 16, 31);
  background: linear-gradient(
    45deg,
    rgba(7, 16, 31, 1) 0%,
    rgba(7, 16, 31, 1) 26%,
    rgba(7, 16, 31, 1) 43%,
    rgba(11, 12, 13, 1) 57%,
    rgba(11, 12, 13, 1) 75%,
    rgba(7, 16, 31, 1) 94%
  );
  height: 100vh;
  width: 100%;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 1.2rem 4.8rem;
`;

const Title = styled.div`
  color: #e22567;
  font-size: 2.8rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  text-transform: uppercase;
`;

const TitleText = styled.div`
  position: relative;

  &::after {
    content: "by Tonu";
    position: absolute;
    top: 90%;
    left: 40%;
    font-size: 1rem;
    color: #adb5bd;
    opacity: 0.7;
  }
`;

const Icon = styled.div`
  color: #fff;
  font-size: 5.6rem;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const Link = styled(S.Link)``;

const AuthContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const LoginBtn = styled(S.LogingRegisterBtn)`
  border: 3px solid #e22567;

  &:hover {
    color: #e22567;
  }
`;

const RegisterBtn = styled(S.LogingRegisterBtn)`
  background-color: #e22567;
  border: 3px solid #e22567;

  &:hover {
    background-color: #a61e4d;
    border: 3px solid #a61e4d;
  }
`;

function App() {
  return (
    <Container>
      <NavBar>
        <Title>
          <TitleText>type</TitleText>
          <Icon>X</Icon>
        </Title>
        <LinkContainer>
          <Link href="/">Dashboard</Link>
          <Link href="/">Leaderboard</Link>
        </LinkContainer>
        <AuthContainer>
          <LoginBtn>Login</LoginBtn>
          <RegisterBtn>Register</RegisterBtn>
        </AuthContainer>
      </NavBar>
    </Container>
  );
}

export default App;
