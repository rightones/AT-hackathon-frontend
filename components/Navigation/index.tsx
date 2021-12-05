import Image from "next/image";
import logo from "public/logo.svg";
import Link from "next/link";
import Button from "components/Chip";
import * as S from "./style";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
    return (
        <S.Container>
            <Link href="/" passHref>
                <a>
                    <Image src={logo} width={180} height={56} />
                </a>
            </Link>
            <div>
              <Link href="/team" passHref>
                <S.Item>팀 찾기</S.Item></Link>
                <Link href="/register" passHref>
                    <S.Item>회원가입</S.Item>
                </Link>
                <Link href="/login" passHref>
                    <S.Item>로그인</S.Item>
                </Link>
              <Button color="white" onClick={()=>router.push("/team/create")}>팀 만들기</Button>
            </div>
        </S.Container>
    );
};

export default Navigation;
