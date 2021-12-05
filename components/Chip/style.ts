/* eslint-disable import/prefer-default-export */

import styled from "styled-components";

export const Container = styled.button<{
    color: "primary" | "secondary" | "white";
    size: "medium" | "large";
}>`
    border-radius: 200px;
    background-color: ${({ theme, color }) =>
        color === "white" ? "white" : theme.color[color]};

    color: ${({ color }) => (color === "primary" ? "white" : "black")};
    border: 1px solid #eee;
    font-size: 1rem;
    padding: ${({ size }) => (size === "medium" ? "8px 16px" : "12px 24px")};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;
