import ContentSection from "../components/ContentSection";
import SocialMedia from "../components/SocialMedia";

// TODO
//	[] Update placeholder images

const PLACEHOLDER = "https://via.placeholder.com/1280x480";
const RESUME_LINK =
  "https://docs.google.com/document/d/1c-Ac_7VzqBrpzxwPKHPxBGQqptPnVVFRr2SxqENqOM8?usp=sharing";

function Software() {
  return (
    <>
      <a
        className="resume-btn"
        href={RESUME_LINK}
        target="_blank"
        rel="noreferrer"
        download
      >
        <button type="button" className="btn btn-dark">
          Resume
        </button>
      </a>
      <SocialMedia type="software" />
      <ContentSection title="Purpose" subtitle="Why I write code">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
          augue mauris augue neque gravida in. Quam quisque id diam vel quam.
          Integer enim neque volutpat ac tincidunt vitae semper quis. Arcu felis
          bibendum ut tristique et egestas quis ipsum suspendisse. Eu facilisis
          sed odio morbi quis commodo. Hac habitasse platea dictumst quisque
          sagittis purus sit. Viverra accumsan in nisl nisi scelerisque eu
          ultrices vitae. Turpis cursus in hac habitasse platea dictumst
          quisque. Nisl pretium fusce id velit ut tortor pretium viverra.
          Accumsan in nisl nisi scelerisque. Sed augue lacus viverra vitae
          congue eu consequat ac felis.
        </p>
      </ContentSection>
      <ContentSection
        title="Experience"
        subtitle="MVPindex | January 2016 - July 2020"
      >
        <p>
          Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
          Volutpat lacus laoreet non curabitur. Fermentum dui faucibus in ornare
          quam viverra orci sagittis eu. Nisl suscipit adipiscing bibendum est
          ultricies integer quis. Senectus et netus et malesuada fames ac turpis
          egestas maecenas. Sed viverra ipsum nunc aliquet bibendum enim
          facilisis. Libero volutpat sed cras ornare arcu dui vivamus arcu
          felis. Sed enim ut sem viverra aliquet eget sit amet tellus. Accumsan
          sit amet nulla facilisi morbi tempus iaculis urna id. Risus feugiat in
          ante metus dictum. A pellentesque sit amet porttitor. Velit egestas
          dui id ornare arcu odio ut. Et ultrices neque ornare aenean euismod
          elementum nisi quis eleifend. Scelerisque felis imperdiet proin
          fermentum leo. Scelerisque fermentum dui faucibus in. Auctor eu augue
          ut lectus. Imperdiet nulla malesuada pellentesque elit eget gravida
          cum sociis. Sem integer vitae justo eget magna fermentum.
        </p>
      </ContentSection>
      <ContentSection className="row row-cols-2">
        <img className="col" alt="mvp-search" src={PLACEHOLDER} />
      </ContentSection>
    </>
  );
}

export default Software;
