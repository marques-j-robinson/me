import styled from "styled-components";

import ContentSection from "../components/ContentSection";
import SocialMedia from "../components/SocialMedia";

const AlbumCover = styled.img`
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Music() {
  return (
    <>
      <SocialMedia type="music" />
      <ContentSection title="Remains of Us" subtitle="Released 2014">
        <p>
          When I recorded this album I was at a point in my music career where I
          needed to release some energy. I was playing with a few friends and we
          were sharing ideas for songs but not really putting together anything
          that could be released. There came a point where I decided to just
          work through the process by myself and ended up playing most all of
          the instruments. The experinece of producing an album is something I
          enjoy and am looking forward to doing again when the time is right.
        </p>
      </ContentSection>
      <ContentSection>
        <AlbumCover
          alt="remains_of_us_album_cover"
          src={`${process.env.PUBLIC_URL}/images/remains_of_us_album_cover.png`}
        />
      </ContentSection>
    </>
  );
}

export default Music;
