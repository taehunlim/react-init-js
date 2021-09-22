import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import css from "@emotion/css";

const colorList = "primary" || "secondary";
const Button = ({type, ...props}) => {
    const { to, href } = props;

    if(to) {
        return <StyledLink {...props}/>
    }

    if(href) {
        return <Anchor {...props}/>
    }
    return <StyledButton {...props} type={type}/>
};

const styles = props => css`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-size: ${props.height && `${(props.height / 40)}rem`};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${props.disabled ? "default": "cursor"};
  appearance: none;
  padding: 0 1em;
  pointer-events: ${props.disabled ? "none": "auto"};
  border-radius: 0.125em;
  border: 0.0625em solid ${!props[colorList] ? "#d2d3d5" : "transparent"};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${
    !props[colorList] 
            ? "transparent" 
            : (props.disabled ? "#d2d3d5" : props.theme[colorList].bg)
  };
  color: ${
    !props[colorList] 
        ? (props.disabled ? "" : props.theme.color.black) 
        : (props.disabled ? props.theme.color.white : props.theme[colorList].font)
  };
  &:hover, &:focus, &:active {
    background-color: ${
        !props[colorList] 
                ? "transparent" 
                : props.theme.color.white
    };
    color: ${
        !props[colorList] 
                ? props.theme.color.primary 
                : props.theme.color[colorList]
    };
    border: 0.0625em solid ${!props[colorList] ? props.theme.color.primary : "currentcolor"}
  }
  
  svg {
    appearance: none;
  }
`;

const StyledButton = styled.button`${styles}`;
const Anchor = styled.a`${styles}`;
const StyledLink = styled(
    ({
         disabled, transparent, height, theme, ...props
    }) => <Link {...props}/>
)`${styles}`

Button.propTypes = {
    disabled: PropTypes.bool,
    transparent: PropTypes.bool,
    height: PropTypes.number,
    type: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    height: 40,
};

export default Button;
