import React from 'react';
import styled from '@emotion/styled';

const Layout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

const Container = styled.div`

`;

export default Layout ;