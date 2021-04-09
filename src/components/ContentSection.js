import styled from "styled-components";

const Title = styled.h3`
  border-left: 3px solid #8a3324;
  padding-left: 15px;
  margin: 18px 0 0 0;
`;

const SubTitle = styled.em`
  font-size: 22px;
  padding: 0;
`;

const Section = styled.div`
  margin: 18px 0;

  p {
    font-size: 16px;
  }
`;

function ContentSection({ title, subtitle, children }) {
  if (!title || !subtitle) {
    return <Section>{children}</Section>;
  }

  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Section>{children}</Section>
    </>
  );
}

export default ContentSection;
