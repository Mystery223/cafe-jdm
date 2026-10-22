import HeroSection from "@/components/sections/hero-section";
import MenuSection from "@/components/sections/menu-section";
import SpaceSection from "@/components/sections/space-section";
import StorySection from "@/components/sections/story-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StorySection />
        <MenuSection />
        <SpaceSection />
      </main>
      <SiteFooter />
    </>
  );
}