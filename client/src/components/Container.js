import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const Container = (props) => {
    return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
