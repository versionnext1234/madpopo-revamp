import mockData from "@/mockdata/mockData";
import PricingCard from "../common/card/PriciningCard";
import CardSlider from "../common/slider/CardSlider";

const LinuxHostingCard = () => {
  const linuxData = mockData.LinuxWebHoisting;
      {/* {linuxData.map((item, index) => (
        <PriciningCard key={index} title={item.title} />
      ))} */}

  return (
    <CardSlider>
      {linuxData.map((item, index) => (
        <PricingCard
          key={index}
          title={item.name}
          discounted={item.price.discounted}
          renewal_price={item.price.renewal_price}
          original={item.price.original}
          anchorLink={item.anchorLink}
          websites={item.features.websites}
          storage={item.features.storage}
          visits={item.features.visits}
        />
      ))}
    </CardSlider>
  );
};

export default LinuxHostingCard;
