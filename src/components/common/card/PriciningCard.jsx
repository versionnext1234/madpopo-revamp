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
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                  src="/images/banner/correctsign.png"
                  alt="Websites icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                {websites}
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                   src="/images/banner/correctsign.png"
                  alt="Visits icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                {visits}
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Storage icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                {storage}
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Inodes icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                200 000 files and directories (inodes)
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                   src="/images/banner/correctsign.png"
                  alt="Domain icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Free domain {currency.symbol} {convertPrice(renewal_price)}
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                   src="/images/banner/correctsign.png"
                  alt="Templates icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Free pre-built templates
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Migration icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Free automatic website migration
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="SSL icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Unlimited free SSL
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Email icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                1 email account
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Backup icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Weekly backups
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Vulnerabilities icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                WordPress vulnerabilities scanner
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Auto update icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                WordPress auto updates
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Acceleration icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Standard WordPress acceleration
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Bandwidth icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Unlimited bandwidth
              </div>
            </li>
            <li className="visibleItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="CDN icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Free CDN
              </div>
            </li>
            <li className="disableItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Staging tool icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                WordPress staging tool
              </div>
            </li>
            <li className="disableItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Dedicated IP icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Dedicated IP address
              </div>
            </li>
            <li className="disableItem">
              <div className={styles.listItemWrapper}>
                <Image
                    src="/images/banner/correctsign.png"
                  alt="Priority support icon"
                  width={20}
                  height={20}
                  className={styles.listItemImage}
                />
                Priority support
              </div>
            </li>
          </ul>
        </div>

        {/*************************************************/}

        <div className={styles.wrapper}>
          {isOpen ? (
            <>
              <div className={styles.dataListWrap}>
                {/* WordPress Hosting Features Section */}
                <div className={styles.titleParagraph}>
                  <h5>WordPress Hosting Features</h5>
                </div>
                <ul>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Managed WordPress"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {managed_wordpress}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                       src="/images/banner/correctsign.png"
                      alt="Daily Backups"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {daily_backups}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="CDN"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {cdn}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Dedicated IP"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {dedicated_ip}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Priority Support"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {priority_support}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="One Click Installation"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {one_click_installation}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Google Integration"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {google_integration}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Acceleration"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {acceleration}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Auto Update"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {auto_update}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Vulnerability Scanner"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {vulnerability_scanner}
                  </li>
                </ul>

                {/* Hosting Website Builder Section */}
                <div className={styles.titleParagraph}>
                  <h5>Hosting Website Builder</h5>
                </div>
                <ul>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="AI Builder"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {ai_builder}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Drag and Drop Editor"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {drag_and_drop_editor}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Transaction Fees"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {transaction_fees}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Payment Methods"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {payment_methods}
                  </li>
                  {ai_features.map((feature, index) => (
                    <li key={index} className={styles.flexItem}>
                      <Image
                          src="/images/banner/correctsign.png"
                        alt={`AI Feature ${index}`}
                        width={20}
                        height={20}
                        className={styles.listItemImage}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Security Section */}
                <div className={styles.titleParagraph}>
                  <h5>Security</h5>
                </div>
                <ul>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="DDoS Protection"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {ddos_protection}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Domain Privacy"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    Domain Privacy: {domain_privacy.free ? "Free" : "Not Free"}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Domain Privacy Value"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    Value: {currency.symbol} {convertPrice(domain_privacy.value)}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Web Application Firewall"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {web_application_firewall}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Cloudflare Protected Nameservers"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {cloudflare_protected_nameservers}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Secure Access Manager"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {secure_access_manager}
                  </li>
                </ul>

                {/* Service and Support Section */}
                <div className={styles.titleParagraph}>
                  <h5>Service and Support</h5>
                </div>
                <ul>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Bandwidth"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {bandwidth}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Uptime Guarantee"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {uptime_guarantee}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Global Data Centers"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {global_data_centers}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                        src="/images/banner/correctsign.png"
                      alt="Customer Support"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {customer_support}
                  </li>
                  <li className={styles.flexItem}>
                    <Image
                       src="/images/banner/correctsign.png"
                      alt="Money Back Guarantee"
                      width={20}
                      height={20}
                      className={styles.listItemImage}
                    />
                    {money_back_guarantee}
                  </li>
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
          ) : (
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
        <div className="hideDataWrap">
          {/* <h6>Managed WordPress Hosting</h6> */}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
