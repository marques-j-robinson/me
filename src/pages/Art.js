import ContentSection from "../components/ContentSection";
import Painting from "../components/Painting";
import SocialMedia from "../components/SocialMedia";

// TODO get names from S3 list endpoint
const images = [
  "Valley of Dreams",
  "Red Mountains",
  "All Mighty Mountain",
  "Cold Misty Wilderness",
  "Mighty Winter Mountains",
  "Winters Day",
];

function Art() {
  return (
    <>
      <SocialMedia type="art" />
      <ContentSection title="Landscape Oil Paintings" subtitle="Alla Prima">
        <p>
          I began painting in 2018. One evening after watching Bob Ross with
          some friends something within me was crying out. My friends would say
          things like "I could never do that". I disagreed, we all are able to
          produce a masterpiece. It just takes a little time and practice. So, I
          set out to do just that, spend time practicing. Over the course of a
          few years I developed my skills and made friends with the tools and
          material. Now when I stand in front of a canvas, I have no fear, for I
          know this is my all mighty world!
        </p>
      </ContentSection>
      <ContentSection>
        <div className="row row-cols-lg-3">
          {images.map((title) => (
            <Painting className="col" key={title} title={title} />
          ))}
        </div>
      </ContentSection>
    </>
  );
}

export default Art;
