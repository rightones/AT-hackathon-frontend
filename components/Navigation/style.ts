/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px
        calc(calc(100vw - ${({ theme }) => theme.size.maxWidth}) / 2 + 20px);
    color: white;
    background-color: ${({ theme }) => theme.color.primary};
    height: 72px;
    z-index: 1;
    @media ${({ theme }) => theme.screen.maxWidth} {
        padding: 20px;
    }

    & > div {
        display: flex;
        align-items: center;
    }
`;

export const Item = styled.a`
    margin: 0 12px;
    font-weight: 500;
    text-decoration: none;
    color: white;
`;
