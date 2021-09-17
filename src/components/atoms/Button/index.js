import React from 'react';
import styled from "@emotion/styled";

const Button = ({type, ...props}) => {
    return <StyledButton {...props} type={type}/>
};

const StyledButton = styled.button`
  
`;

export default Button;
