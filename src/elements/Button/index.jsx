import React from 'react'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'

const Button = (props) => {
  return (
    <div>Button</div>
  )
}

Button.propTypes ={
    type : propTypes.oneOf(["Button", "link"]),
    onclick : propTypes.func,
    target : propTypes.string,
    className : propTypes.string,
    isDisabled : propTypes.bool,
    isLoading : propTypes.bool,
    isSmall : propTypes.bool,
    isLarge : propTypes.bool,
    isBlock : propTypes.bool,
    hasShadow: propTypes.bool
}

export default Button