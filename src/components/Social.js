import React from "react"
import SocialItem from "./SocialItem";

function Social(props) {
    return (
        <ul className="socialList">
            {props.socialItems.map((socialI, index) => <SocialItem item={socialI} key={index}></SocialItem>)}
        </ul>
    )
}

export default Social