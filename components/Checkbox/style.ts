/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    font-size: 1rem;

    .check {
        color: ${({ theme }) => theme.color.primary};
        border: none;
        background: none;
        padding: none;
        svg {
            font-size: 1.5rem;
        }
    }
`;
