import styled from "styled-components";

const Wrapper = styled.a`
  background-color: #555555;
  border-top: 3px solid #bd2c0f;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column !important;
  }
`;

const Name = styled.h1`
  margin-top: auto;
  margin-bottom: 0;
  padding: 12px 0;
  color: #ffffff;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 20px 0 0 0;
  }
`;

const LastName = styled.span`
  color: #e3a857;
`;

const Profession = styled.em`
  color: #ffffff;
  margin-top: auto;
  padding: 0 0 12px 16px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0 0 20px 0;
  }
`;

function Header() {
  return (
    <Wrapper href="/me" className="d-flex flex-row container">
      <Name>
        Marques <LastName>Robinson</LastName>
      </Name>
      <Profession>software engineer - musician - artist</Profession>
    </Wrapper>
  );
}

export default Header;
