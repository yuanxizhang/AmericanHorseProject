import React from "react";
import ahp_logo from "../../americanhorseproject_logo.png";

const Footer=() =>{
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
          
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            <img src={ahp_logo} width="60" height="40" alt="americanhorseproject_logo" />  
          </section>
          <section className="footer-info__returns">
            Privacy Policy
            <br />
            
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">americanhorseproject@gmail.com</section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright @<span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} American Horse Project. All rights reserved.
                    </span>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number"></section>
          <section className="footer-info__contact">
            Contact
            <br />
            
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
}

export default Footer;
