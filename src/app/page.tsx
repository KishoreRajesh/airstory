import Image from "next/image";
import HeroComponent from "../Components/hero";
import Header from "../Components/Header";
import TextwithImage from "../Components/TextWithHover";
import Facecard from "../Components/Facecard";
import MileStone from "../Components/MileStone";
import { FooterDemo } from "@/Components/Foot";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroComponent />
      <div className="flex flex-col items-center justify-center text-center  py-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          FOUNDER
        </h1>
      </div>
      <TextwithImage />
      <div className="flex flex-col items-center justify-center text-center py-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          VISION & MISSION
        </h1>
      </div>
      <TextwithImage />
      <div className="flex flex-col items-center justify-center text-center py-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          OUR VALUES
        </h1>
      </div>
      <Facecard />
      <div className="flex flex-col items-center justify-center text-center py-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          OUR JOURNEY
        </h1>
      </div>
      <MileStone />
      <div className="flex flex-col items-center justify-center text-center py-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          COMMITMENT TO EXCELLENCE
        </h1>
      </div>
      <TextwithImage />
      <FooterDemo />
    </div>
  );
}
