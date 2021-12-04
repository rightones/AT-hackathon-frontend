import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    border-bottom: 1px solid #bbb;
    height: 64px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;

`;

export const Item = styled.div<{active?: boolean}>`
    font-size: 1.25rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    ${({active, theme})=>active && css`
        background-color: ${theme.color.secondary};
    `}
`;