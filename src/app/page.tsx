import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Library from "./components/Library";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Library />
        <Footer />
           
      </main>
    </>
  );
}
