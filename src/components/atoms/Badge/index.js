import React from "react";
import styled from "@emotion/styled";

const Badge = ({count, children, ...props}) => {
    return (
        <StyledBadge {...props}>
            {children}
            <StyledSup>
                {count}
            </StyledSup>
        </StyledBadge>
    )
};

const StyledBadge = styled.span`
  font-size: 0.75rem;
  line-height: 1.5em;
  padding: 0.1em 0.3em;
  border-radius: 0.16667em;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
`;

const StyledSup = styled.sup`
  z-index: auto;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(20%, -25%);
  min-width: 18px;
  height: 18px;
  padding: 3px 6px;
  color: #fff;
  font-weight: bold;
  font-size: 11px;
  white-space: nowrap;
  background: #fb4d44;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #fff;
  line-height: 1;
  letter-spacing: -0.2px;
  text-align: center;
`;

export default Badge;
