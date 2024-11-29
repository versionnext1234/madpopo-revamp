"use client";

import { useCurrency } from "@/context/CurrencyContext";
import AnchorBtn from "../cta/anchorbutton/AnchorBtn";
import CardCurrency from "./CardCurrency";
import Image from "next/image";
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

  return (
    <>
      <div className="extraBox">
        <p>Most Frequently Chosen Package</p>
      </div>
      <div className={`${styles.cardItems} ${clssName || ""}`}>
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
            <li className="visibleItem">Free domain (₹749.00 value)</li>
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
        <div className={styles.seeBtnWrap}>
          <p>
            See All Features{" "}
            <span>
              <Image
                src="../images/card/down-arrow.svg"
                width={17}
                height={9}
                alt="down arrow"
              />
            </span>
          </p>
        </div>
        <div className="hideDataWrap">
          <h6>Managed WordPress Hosting</h6>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
