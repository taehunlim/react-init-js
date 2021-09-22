import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { Icon, Input } from 'components';
const IconInput = ({ icon, iconSize, onClickIcon, ...props}) => {
    return (
        <Wrapper>
            <StyledInput {...props}/>
            <StyledIcon icon={icon} height={iconSize} onClick={onClickIcon}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledInput = styled(Input)`
  padding-left: 12px;
  padding-right: 42px;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 14px;
  cursor: pointer;
  svg {
    stroke: none;
  }
`;

IconInput.propTypes = {
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    onClickIcon: PropTypes.func
}

export default IconInput;
