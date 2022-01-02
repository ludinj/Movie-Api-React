import { Wrapper, Content, Text } from "./HeroImage.style";
import PropTypes from "prop-types";
const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.PropTypess = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
