"use client";
import { useCurrency } from "@/context/CurrencyContext";
import AnchorBtn from "../cta/anchorbutton/AnchorBtn";
import CardCurrency from "./CardCurrency";
import Image from "next/image";
import { useState, useRef } from "react";
import styles from "../card/pricingCard.module.scss";
const PricingCard = ({
  title,
  discounted,
  renewal_price,
  original,
  anchorLink,
  websites,
  storage,
  visits,
  clssName,
  isOpen,
  onToggle,
  managed_wordpress,
  daily_backups,
  cdn,
  dedicated_ip,
  priority_support,
  one_click_installation,
  google_integration,
  acceleration,
  auto_update,
  vulnerability_scanner,
  ai_builder,
  drag_and_drop_editor,
  transaction_fees,
  payment_methods,
  ai_features,
  ddos_protection,
  domain_privacy,
  web_application_firewall,
  cloudflare_protected_nameservers,
  secure_access_manager,
  bandwidth,
  uptime_guarantee,
  global_data_centers,
  customer_support,
  money_back_guarantee
}) => {
  const { currency } = useCurrency();
  const convertPrice = (price) => {
    const conversionRates = {
      INR: 1,
      Euro: 0.012,
      Dollar: 0.014,
    };
    
    return (
      parseFloat(price.replace(/[^0-9.]/g, "")) *
      (conversionRates[currency.currency] || 1)
    ).toFixed(2);
  };
<<<<<<< HEAD
  
=======

   const wrapperRef = useRef(null);

   const handleToggle = () => {
     if (wrapperRef.current) {
       wrapperRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start",
       });
     }
     onToggle();
   };

>>>>>>> 9ca0f17abcf1cba130ec8b603cabf275e9343d77
  return (
    <>
      <div className={`${styles.cardItems} ${clssName || ""}`} ref={wrapperRef}>
        <div className={styles.titleParagraph}>
          <h5>{title || "Starter Boost"}</h5>
          <span>Optimal solution for Beginners</span>
        </div>
        <div className={styles.discountWrap}>
          <div className={styles.savePerWrap}>
            <span>Save 82%</span>
          </div>
          <div className={styles.delAmt}>
            <del>
              {currency.symbol} {convertPrice(original)}
            </del>
          </div>
        </div>
        <div className={styles.priciningWrap}>
          <CardCurrency price={convertPrice(discounted)} />
        </div>
        <span>
          {currency.symbol} {convertPrice(renewal_price)}/mo when you renew
        </span>
        <AnchorBtn
          btnStyle="transparentBtn"
          buttonText="Choose Plan"
          anchorLink={anchorLink}
          icon=""
          btnWidth="100%"
        />
        <hr />

        <div className={styles.dataListWrap}>
          <ul>
            <li className="visibleItem">{websites}</li>
            <li className="visibleItem">{visits}</li>
            <li className="visibleItem">{storage}</li>
            <li className="visibleItem">
              200 000 files and directories (inodes)
            </li>
            <li className="visibleItem">
              Free domain {currency.symbol} {convertPrice(renewal_price)}
            </li>
            <li className="visibleItem">Free pre-built templates</li>
            <li className="visibleItem">Free automatic website migration</li>
            <li className="visibleItem">Unlimited free SSL</li>
            <li className="visibleItem">1 email account</li>
            <li className="visibleItem">Weekly backups</li>
            <li className="visibleItem">WordPress vulnerabilities scanner</li>
            <li className="visibleItem">WordPress auto updates</li>
            <li className="visibleItem">Standard WordPress acceleration</li>
            <li className="visibleItem">Unlimited bandwidth</li>
            <li className="visibleItem">Free CDN</li>
            <li className="disableItem">WordPress staging tool</li>
            <li className="disableItem">Dedicated IP address</li>
            <li className="disableItem">Priority support</li>
          </ul>
        </div>

        <div className={styles.wrapper}>
<<<<<<< HEAD
          <div className={styles.seeBtnWrap} onClick={onToggle}>
            <p>    
              {isOpen ? "See Less Features" : "See More Features"}
              <span
                className={`${styles.arrowIcon} ${
                  isOpen ? styles.rotated : ""
                }`}
              >
                <Image
                  src="../images/card/down-arrow.svg"
                  width={17}
                  height={9}
                  alt="down arrow"
                />
              </span>
            </p>
          </div>
          {isOpen && (
            <>
              <div className={styles.dataListWrap}>
                <div className={styles.titleParagraph}>
                  <h5>WordPress Hosting Features</h5>
                </div>
                <ul>
                  <li>{managed_wordpress}</li>
                  <li>{daily_backups}</li>
                  <li>{cdn}</li>
                  <li>{dedicated_ip}</li>
                  <li>{priority_support}</li>
                  <li>{one_click_installation}</li>
                  <li>{google_integration}</li>
                  <li>{acceleration}</li>
                  <li>{auto_update}</li>
                  <li>{vulnerability_scanner}</li>
                </ul>
                <div className={styles.titleParagraph}>
                  <h5>Hoisting Website Builder</h5>
                </div>
                <ul>
                  <li>{ai_builder}</li>
                  <li>{drag_and_drop_editor}</li>
                  <li>{transaction_fees}</li>
                  <li>{payment_methods}</li>
                  {ai_features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.titleParagraph}>
                  <h5>Security</h5>
                </div>
                <ul>
                  <li>{ddos_protection}</li>
                  <li>Domain Privacy: {domain_privacy.free ? "Free" : "Not Free"}</li>
                  <li>Value: {currency.symbol} {convertPrice(domain_privacy.value)}</li>
                  <li>{web_application_firewall}</li>
                  <li>{cloudflare_protected_nameservers}</li>
                  <li>{secure_access_manager}</li>
                </ul>
                <div className={styles.titleParagraph}>
                  <h5>Service and Support</h5>
                </div><ul>
                  <li>{bandwidth}</li>
                  <li>{uptime_guarantee}</li>
                  <li>{global_data_centers}</li>
                  <li>{customer_support}</li>
                  <li>{money_back_guarantee}</li>
                </ul>
              </div>
            </>
          )}
        </div>
=======
  {isOpen ? (
    <>
      <div className={styles.dataListWrap}>
        <div className={styles.titleParagraph}>
          <h5>WordPress Hosting Features</h5>
        </div>
        <ul>
          <li>{managed_wordpress}</li>
          <li>{daily_backups}</li>
          <li>{cdn}</li>
          <li>{dedicated_ip}</li>
          <li>{priority_support}</li>
          <li>{one_click_installation}</li>
          <li>{google_integration}</li>
          <li>{acceleration}</li>
          <li>{auto_update}</li>
          <li>{vulnerability_scanner}</li>
        </ul>
        <div className={styles.titleParagraph}>
          <h5>Hosting Website Builder</h5>
        </div>
        <ul>
          <li>{ai_builder}</li>
          <li>{drag_and_drop_editor}</li>
          <li>{transaction_fees}</li>
          <li>{payment_methods}</li>
          {ai_features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className={styles.titleParagraph}>
          <h5>Security</h5>
        </div>
        <ul>
          <li>{ddos_protection}</li>
          <li>Domain Privacy: {domain_privacy.free ? "Free" : "Not Free"}</li>
          <li>
            Value: {currency.symbol} {convertPrice(domain_privacy.value)}
          </li>
          <li>{web_application_firewall}</li>
          <li>{cloudflare_protected_nameservers}</li>
          <li>{secure_access_manager}</li>
        </ul>
        <div className={styles.titleParagraph}>
          <h5>Service and Support</h5>
        </div>
        <ul>
          <li>{bandwidth}</li>
          <li>{uptime_guarantee}</li>
          <li>{global_data_centers}</li>
          <li>{customer_support}</li>
          <li>{money_back_guarantee}</li>
        </ul>
      </div>
      <div className={styles.seeBtnWrap} onClick={handleToggle}>
        <p>
          See Less Features
          <span
            className={`${styles.arrowIcon} ${styles.rotated}`}
          >
            <Image
              src="/images/card/down-arrow.svg"
              width={17}
              height={9}
              alt="up arrow"
            />
          </span>
        </p>
      </div>
    </>
  ):(
    <div className={styles.seeBtnWrap} onClick={onToggle}>
      <p> 
        See All Features
        <span className={styles.arrowIcon}>
          <Image
            src="/images/card/down-arrow.svg"
            width={17}
            height={9}
            alt="down arrow"
          />  
        </span>
      </p>
    </div>
  )}
</div>
>>>>>>> 9ca0f17abcf1cba130ec8b603cabf275e9343d77
        <div className="hideDataWrap">
          {/* <h6>Managed WordPress Hosting</h6> */}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
