import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const Input = styled.textarea`
    outline: none;
    border: 1px solid #eee;
    padding: 12px 20px;
    border-radius: 20px;
    margin-top: 12px;
    font-size: 1rem;
    transition: border-color 0.2s ease-in-out;
    width: 100%;
    font-family: inherit;
    resize:none;
    min-height: 160px;
    :focus {
        border: 1px solid ${({ theme }) => theme.color.primary};
    }
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
`;
