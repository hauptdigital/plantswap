import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

interface ContainerProps {
    children: any;
}

function Container(props: ContainerProps) {
    return <Wrapper>{props.children}</Wrapper>;
}

export default Container;
