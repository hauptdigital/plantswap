import React from 'react';
import styled from '@emotion/styled';

const ResponsiveImage = styled.img`
    width: 100%;
`;

function Image(props) {
    return <ResponsiveImage src={props.source} />;
}

export default Image;
