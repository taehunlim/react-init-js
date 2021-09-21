import React from 'react';
import styled from "@emotion/styled";
import {keyframes} from "@emotion/core";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  position: relative;
  border: 0.2em solid #e5e6eb;
  border-bottom-color: #434446;
  border-radius: 50%;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;
