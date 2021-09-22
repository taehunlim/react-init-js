import React from 'react';
import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import css from '@emotion/css';
import { keyframes } from "@emotion/core";

import { Icon, Button } from 'components';

const IconButton = ({ icon, children, ...props }) => {
    const { breakpoint, right, responsive, iconSize } = props;

    const iconElement = <StyledIcon icon={icon} height={iconSize} />
    return (
        <StyledButton hasText={!!children} {...props}>
            <Wrapper>
                {right || iconElement}
                {children &&
                    <Text className="text" responsive={responsive} breakpoint={breakpoint}>{children}</Text>
                }
                {right && iconElement}
            </Wrapper>
        </StyledButton>
    );
};

const fadeIn = keyframes`
  0% { display: none; opacity: 0; }
  1% { display: block; opacity: 0; }
  100% { display: block; opacity: 1; }
`

const collapsedStyles = css`
  overflow: hidden;
  transition: max-width 250ms ease-in-out;
  will-change: max-width;
  & .text {
    display: none;
  }
  &:hover {
    max-width: 100%;
    & .text {
      display: block;
      animation: ${fadeIn} 250ms;
    }
  }
`;

const responsiveStyles = props => css`
  @media screen and (max-width: ${props('breakpoint')}px) {
    width: auto;
    flex: 0 !important;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  padding: 0.4375em;
  @media screen and (max-width: ${props => props.breakpoint}px) {
    display: ${props => props.responsive && 'none !important'};
  }
`;

const StyledButton = styled(Button)`
  max-width: ${props => props.hasText && !props.collapsed ? '100%' : '2.5em'};
  width: ${props => props.hasText ? 'auto' : '2.5em'};
  padding ${props => props.hasText ? '0 0.4375em' : 0};
  box-sizing: border-box;
  flex: 0 0 2.5em;
  ${props => props.collapsed && collapsedStyles};
  ${props => props.responsive && responsiveStyles};
  
  :hover, :focus, :active {
    stroke: currentColor;
  }
`;

const StyledIcon = styled(Icon)`
  flex: none;
  cursor: pointer;
`;

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    iconSize: PropTypes.number,
    responsive: PropTypes.bool,
    breakpoint: PropTypes.number,
    collapsed: PropTypes.bool,
    right: PropTypes.bool,
}

IconButton.defaultProps = {
    breakpoint: 479,
}

export default IconButton;
