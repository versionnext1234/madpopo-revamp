import mockData from "@/mockdata/mockData";
import PricingCard from "../common/card/PriciningCard";
import CardSlider from "../common/slider/CardSlider";
import { useState } from "react";

const WordpressHostingCard = () => {
  const hostingPlans = mockData.WordPressHosting;
  const [isAllOpen, setIsAllOpen] = useState(false);
  const handleToggleAll = () => {
    setIsAllOpen((prevState) => !prevState);
  };
   
  return (
    <CardSlider>
      {hostingPlans.map((item, index) => (
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
          clssName={item.clssName}
          managed_wordpress={item.features.hosting.managed_wordpress}
          daily_backups={item.features.hosting.daily_backups}
          cdn={item.features.hosting.cdn}
          dedicated_ip={item.features.hosting.dedicated_ip}
          priority_support={item.features.hosting.priority_support}
          one_click_installation={item.features.wordpress.one_click_installation}
          google_integration={item.features.wordpress.google_integration}
          acceleration={item.features.wordpress.acceleration}
          auto_update={item.features.wordpress.auto_updates}
          vulnerability_scanner={item.features.wordpress.vulnerability_scanner}
          ai_builder={item.features.builder.ai_builder}
          drag_and_drop_editor={item.features.builder.drag_and_drop_editor}
          transaction_fees={item.features.builder.transaction_fees}
          payment_methods={item.features.builder.payment_methods}
          ai_features={item.features.builder.ai_features}
          ddos_protection={item.features.security.ddos_protection}
          domain_privacy={item.features.security.domain_privacy}
          web_application_firewall={item.features.security.web_application_firewall}
          cloudflare_protected_nameservers={item.features.security.cloudflare_protected_nameservers}
          secure_access_manager={item.features.security.secure_access_manager}
          bandwidth={item.features.support.bandwidth}
          uptime_guarantee={item.features.support.uptime_guarantee}
          global_data_centers={item.features.support.global_data_centers}
          customer_support={item.features.support.customer_support}
          money_back_guarantee={item.features.support.money_back_guarantee}
          isOpen={isAllOpen}
          onToggle={handleToggleAll}
        />
      ))}
    </CardSlider>
  );
};

export default WordpressHostingCard;
