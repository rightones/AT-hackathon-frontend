import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 128px;
    .section{
        padding: 32px;
        border: 1px solid #bbb;
        :not(first-of-type){
            border-top: 1px solid #bbb;
        }
        gap: 64px;
        display: flex;
        flex-direction: column;
    }
    .row{
        display: grid;
        grid-template-columns: 300px auto;
        align-items: center;
        h3{
            text-align: center;
        }
    }
`;