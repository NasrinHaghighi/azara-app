import Image from "next/image";
import Banner from "../components/Landing/Banner";
import MovingText from "../components/Landing/MovingText";
import Article from "../components/Landing/Article/Article";
import Friends from "../components/Landing/Firends/Friends";
import { GrGallery } from "react-icons/gr";
import Gallery from "../components/Landing/Gallery/Gallery";
import Footer from "../components/Landing/Footer";
import Books from "../components/Landing/Books/Books";

export default function Home() {
  return (
    <main className=" relative  h-screen   ">
  <Banner/> 

 
  
      <Article /> 
  <Friends />  
  <br/> 
  <MovingText/> 
  <br/> 
 {/* <Gallery /> 
 <Books /> */}
  <Footer />
    </main>
  );
}
