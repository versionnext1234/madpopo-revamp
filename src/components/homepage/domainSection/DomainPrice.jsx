import styles from "../domainSection/domain.module.scss";
import domainPriceData from "@/mockdata/domainPriceMockdata";

const DomainPrice = () => {
  return (
    <div className={styles.priceWrap}>
        {domainPriceData.map((item, index) => (
        <div key={index} className={styles.priceBox}>
          <h6>{item.currency}</h6>
          <h6>{item.price}</h6>
          <del>{item.originalPrice}</del>
        </div>
      ))}
    </div>
  )
}

export default DomainPrice;