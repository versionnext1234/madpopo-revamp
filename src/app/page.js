import SectionTitle from "@/components/common/sectiontitle/SectionTitle";
import BannerSection from "@/components/homepage/bannersection/BannerSection";
import HoistingBanner from "@/components/homepage/hoistingBannerSection/HoistingBanner";
import OptimizeBannerHeading from "@/components/homepage/optimizeSesction/OptimizeBannerHeading";
import OrganizerSection from "@/components/homepage/organizersection/OrganizerSection";
import PlansSection from "@/components/homepage/planstabs/PlansSection";
import GuaranteeBanner from "@/components/homepage/guaranteeBannerSection/GuaranteeBanner";
import PopularApps from "@/components/homepage/popularAppsSection/PopularApps";
import UsersFeedback from "@/components/homepage/usersFeedbackSection/UsersFeedback";
import Domain from "@/components/homepage/domainSection/Domain";
import QuestionSection from "@/components/homepage/freqaskQuestionSection/QuestionSection";

export const metadata = {
  title: "MadPopo Web Hosting Solutions: Secure, Scalable, Affordable",
  description:
    "MadPopo high-performance web hosting featuring WordPress, Windows, Linux, ASP support, and Cloud servers for top-tier security and reliability.",
  keywords:
    "WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling",
  alternates: {
    canonical: "https://madpopo.com",
  },
  openGraph: {
    url: "https://www.madpopo.com/",
    type: "website",
    images: [
      {
        url: "https://www.madpopo.com/image/madpopo-hosting.jpg",
        width: 1200,
        height: 675,
        type: "image/jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://www.madpopo.com/image/madpopo-hosting.jpg",
  },
};

export default function Home() {
  return (
    // <ProductPrice price={1000} />
    <>
      <BannerSection />
      <OrganizerSection />
      <PlansSection/>
      <OptimizeBannerHeading />
      <HoistingBanner />
      <GuaranteeBanner />
      <PopularApps/>
      <UsersFeedback />
      <Domain />
      <QuestionSection />
    </>
  );
}
