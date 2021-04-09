import styled from "styled-components";

const S3_BUCKET = "https://mrp-paintings.s3.us-east-2.amazonaws.com";

const Wrapper = styled.div`
  img {
    width: 95%;
  }
  p {
    text-align: center;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
`;

function Image({ title }) {
  const titleUrl = title.replaceAll(" ", "+");
  return (
    <Wrapper>
      <img src={`${S3_BUCKET}/${titleUrl}/medium.jpg`} alt={title} />
      <p>{title}</p>
    </Wrapper>
  );
}

export default Image;

