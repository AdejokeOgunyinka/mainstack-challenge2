import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import InstagramIcon from "../../assets/instagram_circle.svg";
import TwitterIcon from "../../assets/twitter_circle.svg";
import LinkedinIcon from "../../assets/linkedin_circle.svg";
import FacebookIcon from "../../assets/fb_circle.svg";

const SocialMedia = () => {
  return (
    <HStack spacing="12px !important">
      <Image alt="insta" src={InstagramIcon} boxSize={{ base: "36px" }} />
      <Image alt="twit" src={TwitterIcon} boxSize={{ base: "36px" }} />
      <Image alt="linkedin" src={LinkedinIcon} boxSize={{ base: "36px" }} />
      <Image alt="fb" src={FacebookIcon} boxSize={{ base: "36px" }} />
    </HStack>
  );
};

export default SocialMedia;
