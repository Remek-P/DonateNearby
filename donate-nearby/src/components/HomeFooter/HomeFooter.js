import React from "react";

import facebookIcon from "../../assets/icons/Facebook.svg";
import instagramIcon from "../../assets/icons/Instagram.svg";

export function HomeFooter() {
    return (
        <section className="footer">
            <div className="footer__r">Copyright by Coders Lab</div>
            <div className="footer-icons">
                <div
                    className="footer-icons__icon1"
                    style={{backgroundImage: `url(${facebookIcon})`}}
                ></div>
                <div
                    className="footer-icons__icon2"
                    style={{backgroundImage: `url(${instagramIcon})`}}
                ></div>
            </div>
        </section>
    )
}