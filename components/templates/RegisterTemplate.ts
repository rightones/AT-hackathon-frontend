import styled from "styled-components";

export const Container = styled.div`
    .section {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
`;

export const Section1 = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 128px;

    .left {
        margin: 20px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 32px;
        .vertical {
            display: flex;
            justify-content: space-between;
            gap: 32px;
        }
    }

    .right {
        width: 400px;
        box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        margin: 20px;
        padding: 20px;
        gap: 32px;
        display: flex;
        flex-direction: column;
        .image {
            width: 180px;
            height: 180px;
            border-radius: 90px;
            overflow: hidden;
            margin: 0 auto;
            background-color: #eee;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .category {
            border-radius: 16px;
            border: 1px solid #777;
            padding: 20px;
        }
    }
`;
