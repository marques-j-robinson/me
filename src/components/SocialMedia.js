import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faSpotify,
  faItunes,
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import ContentSection from "../components/ContentSection";

const SOFTWARE_ACCOUNTS = [
  {
    iconEl: <FontAwesomeIcon icon={faGithub} />,
    url: "https://github.com/marques-j-robinson",
  },
  {
    iconEl: <FontAwesomeIcon icon={faLinkedin} />,
    url: "https://www.linkedin.com/in/marques-j-robinson/",
  },
  {
    iconEl: <FontAwesomeIcon icon={faMedium} />,
    url: "https://marques-robinson-project.medium.com/",
  },
];

const ART_ACCOUNTS = [
  {
    iconEl: <FontAwesomeIcon icon={faFacebook} />,
    url: "https://www.facebook.com/marquesrobinsonproject",
  },
  {
    iconEl: <FontAwesomeIcon icon={faInstagram} />,
    url: "https://www.instagram.com/marques_robinson_project/",
  },
  {
    iconEl: <FontAwesomeIcon icon={faTwitter} />,
    url: "https://twitter.com/marques_project",
  },
  {
    iconEl: <FontAwesomeIcon icon={faYoutube} />,
    url: "https://www.youtube.com/channel/UCJ7yDt_-hJ53F7QkO4rq_Lg",
  },
];

const MUSIC_ACCOUNTS = [
  {
    iconEl: <FontAwesomeIcon icon={faFacebook} />,
    url: "https://www.facebook.com/themarquesrobinsonproject/",
  },
  {
    iconEl: <FontAwesomeIcon icon={faSpotify} />,
    url:
      "https://open.spotify.com/artist/0PYFSY25463nFRANYv4TYF?si=_y4TMmv6TtG3xvhxW1YsOg",
  },
  {
    iconEl: <FontAwesomeIcon icon={faItunes} />,
    url: "https://music.apple.com/album/885643525",
  },
  {
    iconEl: <FontAwesomeIcon icon={faYoutube} />,
    url: "https://www.youtube.com/channel/UCJ7yDt_-hJ53F7QkO4rq_Lg",
  },
];

const SocialMediaLink = styled.li`
  display: inline;
  font-size: 25px;
  padding: 10px;
`;

const buildLinks = (accounts) =>
  accounts.map(({ iconEl, url }, key) => (
    <SocialMediaLink key={key}>
      <a href={url} target="_blank" rel="noreferrer">
        {iconEl}
      </a>
    </SocialMediaLink>
  ));

function SocialMedia({ type }) {
  let links;
  if (type === "art") {
    links = <ul>{buildLinks(ART_ACCOUNTS)}</ul>;
  } else if (type === "music") {
    links = <ul>{buildLinks(MUSIC_ACCOUNTS)}</ul>;
  } else if (type === "software") {
    links = <ul>{buildLinks(SOFTWARE_ACCOUNTS)}</ul>;
  }
  return (
    <ContentSection>
      <p>Please follow me on social media to see more.</p>
      {links}
    </ContentSection>
  );
}

export default SocialMedia;
