import Header from "@/layout/header";
import Hero from "@/home/herosection";
import Footer from "@/layout/footer";
import AboutBeaverHealthAI from "@/home/AboutBeaverHealthAI";
import ExploreSolutions from "@/home/explore_solution";
import WhyChoose from "@/common/whychoose";
import UseCasesSection from "@/home/usecasesection";
import CollaborationSection from "@/home/CollaborationSection";
import TechnologyStack from "@/home/technologies";
import ImpactStatistics from "@/home/ImpactStatistics";
import LatestBlogs from "@/home/LatestBlogs";



export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutBeaverHealthAI/>
      <ExploreSolutions/>
      <WhyChoose/>
      <UseCasesSection/>
      <CollaborationSection/>
      <TechnologyStack/>
      <ImpactStatistics/>
      <LatestBlogs/>
      <Footer/>
    </div>
  );
}
