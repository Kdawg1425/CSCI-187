import React from "react";
import Banner from "react-banner";
import "react-banner/dist/style.css";

export default (props) => {
    return (
        <Banner
            logo="Home"
            url={window.location.pathname}
            items= {[
                { content: "Devices", url: "/Devices"},
                { content: "Account", url: "/Account"},
                { content: "Logout", url: "/Logout"}
            ]
            }
        />
            
    );
};