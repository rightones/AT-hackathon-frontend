import Chip from "components/Chip";
import Input from "components/Input";
import * as Template from "components/templates/LoginTemplate";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { idStore } from "./_app";

const LoginPage = () => {
    const router = useRouter();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const [userId, setUserId] = useRecoilState(idStore);

    useEffect(() => {
        if (userId) router.push("/");
    }, []);

    const handleLogin = () => {
        if (id && password) {
            fetch("https://at-hackathon.herokuapp.com/auth/login/", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ username: id, password }),
            }).then(async (res) => {
                if (res.ok) {
                    const json = await res.json();
                    localStorage.setItem("accessToken", json.access_token);
                    localStorage.setItem("refreshToken", json.refresh_token);
                    setUserId(json.user.pk);
                    router.push("/");
                } else {
                    alert("아이디 또는 비밀번호를 확인해주세요.");
                    setPassword("");
                }
            });
        } else {
            alert("아이디와 비밀번호를 입력해주세요.");
        }
    };

    return (
        <Template.Container className="wrapper">
            <Template.Section>
                <Template.Header>
                    <h3>로그인</h3>
                </Template.Header>
                <div className="content">
                    <Input label="아이디" state={id} setState={setId} />
                    <Input
                        label="비밀번호"
                        state={password}
                        setState={setPassword}
                        password
                    />
                    <Chip color="primary" size="large" onClick={handleLogin}>
                        로그인
                    </Chip>
                </div>
            </Template.Section>
        </Template.Container>
    );
};

export default LoginPage;
