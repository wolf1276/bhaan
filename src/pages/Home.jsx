import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-8"></div>
      <Hero />
      
        <About />
      
    </>
  );
}
