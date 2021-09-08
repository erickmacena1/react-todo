import React from "react"

function SocialItem(props) {
    return (
        <li><a href={props.item.url} target="_blank" rel="noreferrer">{props.item.name}</a></li>
    )
}

export default SocialItem