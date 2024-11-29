import mockData from "@/mockdata/mockData";
import React from "react";
import CardSlider from "../common/slider/CardSlider";
import PricingCard from "../common/card/PriciningCard";

const BusinessEmailCard = () => {
  const businessEmailData = mockData.BusinessEmail;

  return (
    <CardSlider>
      {businessEmailData.map((item, index) => (
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

export default BusinessEmailCard;
