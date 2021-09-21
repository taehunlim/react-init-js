import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Icon = ({icon, ...props}) => {
    const svg = require(`!raw-loader!./icons/${icon}.svg`).default;
    return <Wrapper {...props} dangerouslySetInnerHTML={{__html: svg}}/>
};

const fontSize = ({width, height}) => {
    const size = width || height;
    return size ? `${size}px` : "22px";
};

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};

  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;

  svg {
    width: 100%;
    //height: 100%;
    //fill: currentcolor;
    //stroke: currentcolor;
  }
`;

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default Icon;
