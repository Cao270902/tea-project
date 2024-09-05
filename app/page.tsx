import NavBar from "@/components/common/NavBar";
import ArtOfTeaCeremonySection from "@/components/sections/ArtOfTeaCeremonySection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import NewInfoSection from "@/components/sections/NewInfoSection";
import NewProductSection from "@/components/sections/NewProductSection";
import TeaCeremonySection from "@/components/sections/TeaCeremonySection";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <TeaCeremonySection />
      <NewProductSection />
      <ArtOfTeaCeremonySection />
      <NewInfoSection />
      <FooterSection />
    </main>
  );
}
