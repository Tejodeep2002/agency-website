import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";

export default function Home() {
  return (
    <main className=" subpixel-antialiased scroll-smooth">
      <Hero/>
      {/* <Banner/> */}
      <Services/>
      <About/>

      

    </main>
  )
}
