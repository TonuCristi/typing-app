import styled from "styled-components";

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-size: 1.6rem;
  border-bottom: 3px solid transparent;
  /* transition: all 0.2s ease; */
  position: relative;
  padding-bottom: 0.2rem;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0%;
    font-size: 1rem;
    color: #adb5bd;
    opacity: 0.7;
    width: 100%;
    height: 0px;
    background-color: transparent;
    transition: all 0.2s ease;
    border-radius: 2.7rem;
  }

  &:hover {
    &::after {
      top: 130%;
      height: 3px;
      background-color: #e22567;
    }
  }
`;

export const LogingRegisterBtn = styled.button`
  font-family: inherit;
  border: none;
  background: none;
  color: #fff;
  width: 10rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 2.7rem;
  padding: 0.6rem 0rem;
  font-size: 1.6rem;
  text-align: center;
`;

export const Stat = styled.div`
  font-size: 1.6rem;
  background-color: #e22567;
  width: 6rem;
  padding: 0.4rem;
  border-radius: 2.7rem;
  text-align: center;
`;
