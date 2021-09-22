import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import css from '@emotion/css';

const List = ({ordered, children, ...props}) => {
    return React.createElement(ordered ? Ol : Ul, props, children)
};

const styles = css`
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
`;

const Ol = styled.ol`${styles}`;
const Ul = styled.ul`${styles}`;

List.propTypes = {
    ordered: PropTypes.bool,
};

export default List;
