import React from 'react';
import Menu from './Menu';
import styled from '@emotion/styled';
import Container from './Container';

const HeaderWrapper = styled.div`
    width: 100%;
`;

function Header() {
    return (
        <HeaderWrapper>
            <Container>
                Header
                <Menu />
            </Container>
        </HeaderWrapper>
    );
}

export default Header;
