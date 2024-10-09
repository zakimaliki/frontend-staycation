import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

const Button = (props) => {
    const className = [props.className]
    if (propTypes.isPrimary) className.push("btn-primary")
    if (propTypes.isLarge) className.push("btn-lg")
    if (propTypes.isSmall) className.push("btn-sm")
    if (propTypes.isBlock) className.push("btn-block")
    if (propTypes.hasShadow) className.push("btn-shadow")

    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (props.type === "link") {
        if (props.isExternal) {
            return (
                <a href={props.href} className={className.join(" ")} style={props.style} target={props.target === "_blank" ? "_blank" : undefined} rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
                    {props.children}
                </a>
            )
        } else {
            <Link to={props.href}
                className={className.join("")}
                style={props.style}
                onClick={onClick}
            >
                {props.children}
            </Link>
        }
    }

    return (
        <div>Button</div>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(["Button", "link"]),
    onClick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool
}

export default Button