import React from 'react';
import "./Banner.css";

function Banner() {
    return (
        <div className="banner"
        style={{
            height: 448,
            backgroundSize: "cover",
            backgroundImage: `url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')`,
            backgroundPosition: "center center",
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title" >Discover the best food and drinks in bangalore</h1>
            </div>
        </div>
    )
}

export default Banner
