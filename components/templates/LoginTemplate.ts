import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
`;

export const Section = styled.div`
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 32px;
    min-width: 600px;
    border-radius: 32px;
    overflow: hidden;

    .content {
        margin: 16px auto 64px auto;
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
        button {
            align-self: center;
        }
    }
`;

export const Header = styled.div`
    background-color: ${({ theme }) => theme.color.primary};

    padding: 24px 48px;
    color: white;
`;
