import Image from "next/image";
import HeroComponent from "./Components/hero";
import Header from "./Components/Header";
import TextwithImage from "./Components/TextWithHover";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroComponent />
      <TextwithImage />
    </div>
  );
}
