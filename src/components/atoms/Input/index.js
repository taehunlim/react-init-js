import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import css from "@emotion/css";

const Input = ({...props}) => {
    const { type } = props;
    if(type === 'textarea') {
        return <StyledTextarea {...props}/>
    }
    if(type === 'select') {
        return <StyledSelect {...props}/>
    }
    return <StyledInput {...props}/>
};

const styles = props => css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${props.height && `${(props.height / 35.56)}rem`};
  padding: ${props.type === 'textarea' ? '0.4444444444em' : '0 0.4444444444em'};
  height: ${props.type === 'textarea' ? 'auto' : '2.2222222222em'};
  color: ${props.disabled ? "#77797c" : "#9d9fa2"};
  background-color: ${props.disabled && "rgba(241, 242, 245, 0.6)"};
  border: ${
    props.disabled 
    ? "2px" : props.invalid 
    ? `1px solid ${props.theme.color.danger}`  
    : "1px solid #e5e6eb"
  };
  transition: color 250ms ease-out, border-color 250ms ease-out;
  border-radius: 2px;
  opacity: 0.8;

  &:focus {
    border: 1px solid #77797c;
    color: ${props.theme.color.black}
  }
  
  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`
const StyledTextarea = styled.textarea`${styles}`;
const StyledSelect = styled.select`${styles}`;
const StyledInput = styled.input`${styles}`;

Input.propTypes = {
    type: PropTypes.string,
    height: PropTypes.number,
    invalid: PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    height: 40,
};


export default Input;
