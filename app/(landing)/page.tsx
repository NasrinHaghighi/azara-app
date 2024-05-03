import Image from "next/image";
import Banner from "../components/Landing/Banner";
import MovingText from "../components/Landing/MovingText";
import Article from "../components/Landing/Article/Article";

export default function Home() {
  return (
    <main className=" relative  h-screen  ">
  <Banner/>

   {/* <MovingText/> */}

   <Article />
    </main>
  );
}
