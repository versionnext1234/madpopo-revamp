import AnchorBtn from "@/components/common/cta/anchorbutton/AnchorBtn";
import styles from "../bannersection/banner.module.scss";
import BannerCurrency from "./BannerCurrency";

const LeftBox = () => {
  
  return (
    <div className={styles.leftBox}>
      <div className={styles.offerTag}>
        <span>Up to 82% off hosting</span>
      </div>
      <h1>Fast, Secure, and Reliable Web Hosting</h1>

      <div className={styles.listWrap}>
        <ul>
          <li>
            <span>
              <img
                src="/images/banner/badge-check.svg"
                alt="madpopo check list"
                width={20}
                height={20}
              />
            </span>
            Free Domain and SSL
          </li>
          <li>
            <span>
              <img
                src="/images/banner/badge-check.svg"
                alt="madpopo check list"
                width={20}
                height={20}
              />
            </span>
                Free Domain and SSL
          </li>
        </ul>
        <ul>
          <li>
            <span>
              <img
                src="/images/banner/badge-check.svg"
                alt="madpopo check list"
                width={20}
                height={20}
              />
            </span>
            Free website migration
          </li>
          <li>
            <span>
              <img
                src="/images/banner/badge-check.svg"
                alt="madpopo check list"
                width={20}
                height={20}
              />
            </span>
            24/7 customer support
          </li>
        </ul>
      </div>
      <div className={styles.priciningWrap}>
        <BannerCurrency price={1000} />
      </div>
      <div className={styles.spanText}>
        <span>
          <img
            src="/images/banner/check-circle.svg"
            alt="madpopo check list"
            width={20}
            height={20}
          />{" "}
          30-day money-back guarantee
        </span>
      </div>
      <div className={styles.btnsWrap}>
        <AnchorBtn
          btnStyle="solidBtn"
          buttonText="Choose your Plan"
          anchorLink="#"
          icon=""
          btnWidth="16.8rem"
        />
        <AnchorBtn
          btnStyle="transparentBtn"
          buttonText="Contact Sales"
          anchorLink="#"
          icon=""
          btnWidth="16.8rem"
        />
      </div>
    </div>
  );
};

export default LeftBox;
