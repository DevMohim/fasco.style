import BrandLogo from "@/components/Homepage/BrandLogo";
import Hero from "@/components/Homepage/Hero";
import NewArrivals from "@/components/Homepage/NewArrivals";
import NewsLetter from "@/components/Homepage/NewsLetter";
import PeakyBlinder from "@/components/Homepage/PeakyBlinder";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="my-5">
      <Hero />
      <BrandLogo />
      <Suspense fallback={<h1 className="animate-pulse">Loading...</h1>}>
        <NewArrivals />
      </Suspense>
      
    </main>
  );
}
