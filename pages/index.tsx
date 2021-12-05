import Image from "next/image";
import banner from "public/banner.svg";
import styled from "styled-components";
import Chip from "../components/Chip";
import { useRouter } from "next/router";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .image{
        width: 100%;
        height: calc(100vh - 72px);
        margin: 0 -20px;
        background-image: url("/banner.svg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        color: white;
        h1{
            margin-bottom: 64px;
        }
    }
`;

const HomePage = () => {
    const router = useRouter();
    return <Container><div className="image"><h3>타 학과와 교류를 하고 싶을 때,<br/>
        프로젝트 팀원을 쉽게 구하고 싶을 때,</h3><h1>당신의 뮤즈를 유레카와 함께</h1><Chip color="secondary" size="large" onClick={() => router.push("/register")}>
        지금 시작하기
    </Chip></div></Container>
};

export default HomePage;
