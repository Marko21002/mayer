import Image from "next/image";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Menu from "./components/menu";
import Partners from "./components/partners";
import Content from "./components/content";
import Menu2 from "./components/main-diishes";
import Feature2 from "./components/feature2";
import Footer from "./components/footer";
import Choko from "./components/choko";
import Wine from "./components/wine";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Feature></Feature>
      <Content></Content>
      <Partners></Partners>
      <Menu2></Menu2>
      <Feature2></Feature2>
      <Menu></Menu>
      <Feature2></Feature2>
      <Footer></Footer>
    </div>
  );
}
