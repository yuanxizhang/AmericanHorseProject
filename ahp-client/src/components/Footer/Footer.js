import React from "react";



const Footer=() =>{
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            
          </section>
          <section className="footer-info__returns">
            Privacy Policy
            <br />
            Terms and Conditions
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">shop.info@gmail.com</section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">99999999999</section>
          <section className="footer-info__contact">
            Our Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
}

export default Footer;
