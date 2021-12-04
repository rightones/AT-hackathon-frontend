import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    overflow: hidden;
    transition: all 250ms ease-in-out;
    :hover{
        transform: translateY(-8px);
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);
    }
    cursor: pointer;
`;

export const Image = styled.div`
    height: 200px;
    position: relative;
    background-color: #eee;
`;

export const Content = styled.div`
    padding: 24px;
    
    h5{
        margin-top: 16px;
    }
`;