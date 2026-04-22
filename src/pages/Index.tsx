import HeroSection from "@/components/wedding/HeroSection";
import DetailsSection from "@/components/wedding/DetailsSection";
import DresscodeSection from "@/components/wedding/DresscodeSection";
import RsvpContacts from "@/components/wedding/RsvpContacts";

export default function Index() {
  return (
    <div className="min-h-screen texture-bg" style={{ backgroundColor: "var(--cream)" }}>
      <HeroSection />
      <DetailsSection />
      <DresscodeSection />
      <RsvpContacts />
    </div>
  );
}
