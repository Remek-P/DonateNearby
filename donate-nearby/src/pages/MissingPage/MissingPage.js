import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import image from "../../assets/images/This-is-not-the-page-you-are-looking-for.png"

export default function MissingPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const timerID = setTimeout(() => {
            navigate("/")
        }, 5000)

        return () => clearTimeout(timerID);
    }, [])

    return (
        <>
            <h2>This is NOT the page you are looking for</h2>
            <div
                className="missingPage"
                style={{backgroundImage: `url(${image})`}}
            />
        </>
    )
}