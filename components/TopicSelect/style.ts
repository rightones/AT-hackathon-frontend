import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    border-radius: 16px;
    border: 1px solid #eee;
    align-items: start;
    max-height: 200px;
    overflow: hidden;
    width: 100%;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 200px;
    border-right: 1px solid #eee;

`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    gap: 8px;
`;

export const Position = styled.div<{ active: boolean }>`
    font-size: 1rem;
    padding: 8px 16px;
    background: ${({ active})=>active ?"#eee":"#fff"};
    gap: 8px;
    cursor: pointer;

    &+&{
        border-top: 1px solid #eee;
    }
`;

export const Topic = styled.div<{ active: boolean }>`
    font-size: 1rem;
    padding: 8px 12px;
    background: ${({ active})=>active ?"#eee":"#fff"};
    cursor: pointer;
    border-radius: 12px;
`;