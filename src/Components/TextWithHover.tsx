import { section } from 'framer-motion/m';
import HoverScaleWithFloatingImage from './ui/textwithimage';

const TextwithImage = () => {
  return (
    <section>
    <HoverScaleWithFloatingImage
      text="The Airsafa Story: From Concept to Reality which will be very helpful for you to know about Airsafa"
      imageSrc="/next.svg"
      imageAlt="Floating Image"
    />
    </section>
  );
};

export default TextwithImage;