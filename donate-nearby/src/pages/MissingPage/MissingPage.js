import React from "react";

import image from "../../assets/images/This-is-not-the-page-you-are-looking-for.png"

export default function MissingPage() {
    return (
        <>
            <h2>This is not the page you are looking for</h2>
            <div
                className="missingPage"
                style={{backgroundImage: `url(${image})`}}
            />
        </>
    )
}