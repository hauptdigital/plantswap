import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyle() {
    return (
        <>
            <Global
                styles={(theme) => css`
                    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
                    *,
                    *:before,
                    *:after {
                        box-sizing: border-box;
                    }
                    body {
                        font-size: 16px;
                        margin: 0;
                        font-family: 'Montserrat', sans-serif;
                        background-color: ${theme.colors.background.primary};
                        color: ${theme.colors.text.primary};
                    }
                    h1,
                    h2,
                    h3,
                    h4,
                    h5 {
                        margin: 0;
                        font-weight: normal;
                    }
                `}
            />
        </>
    );
}

export default GlobalStyle;
