import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { Icon } from 'components';

const colorList = "primary" || "secondary";
const TextIcon = ({ icon, iconSize, text, ...props }) => {
    return (
        <Wrapper {...props}>
            <Icon icon={icon} height={iconSize} />
            <Text>{text}</Text>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: color 250ms ease-out;
  
  :hover, :focus, :active {
    color: ${props => 
            !props[colorList]
            ? props.theme.color.primary
            : props.theme.color[colorList]};
    stroke: currentColor;
    stroke-width: 0.5;
  }
`;

const Text = styled.span`
  line-height: 1;
  letter-spacing: -0.2px;
  font-size: 10px;
  font-weight: 500;
`;

TextIcon.prototype = {
    icon: PropTypes.string,
    iconSize: PropTypes.string,
    text: PropTypes.string,
}

export default TextIcon;
