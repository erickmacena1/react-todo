import React from "react"
import SocialItem  from "./SocialItem";

function Social(props) {
    return (
        <ul>
            {props.socialItems.map((socialI, index) => {
                let separator = "";
                if(index % 2 !== 0) {
                    separator = "|";
                }

                return separator + <SocialItem item={socialI}></SocialItem>
            })}
        </ul>
    )
}

export default Social