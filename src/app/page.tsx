import Image from "next/image";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Menu from "./components/menu";
import Partners from "./components/partners";
import Content from "./components/content";
import Menu2 from "./components/main-diishes";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Feature></Feature>
      <Content></Content>
      <Partners></Partners>
      <Menu2></Menu2>
      <Menu></Menu>
    </div>
  );
}
