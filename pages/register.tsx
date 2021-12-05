import Checkbox from "components/Checkbox";
import Chip from "components/Chip";
import FileInput from "components/FileInput";
import Input from "components/Input";
import Select from "components/Select";
import * as RegisterTemplate from "components/templates/RegisterTemplate";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Textarea from "../components/Textarea";
import TopicSelect from "../components/TopicSelect";
import { idStore } from "./_app";

const RegisterPage = () => {
    const router = useRouter();
    const [userId, setUserId] = useRecoilState(idStore);
    const [state, setState] = useState({
        id: "",
        nickname: "",
        password1: "",
        password2: "",
        email: "",
        document: null,
        gender: 0,
        image: null,
        category1: false,
        category2: false,
        category3: false,
        description: "",
        portfolio: "",
    });
    const setItemState = (item: string) => (arg0: any) =>
        setState((old) => {
            return { ...old, [item]: arg0 };
        });
    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        if (state.image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(state.image);
        }
    }, [state.image]);

    const handleSubmit = () => {
        if (
            state.id &&
            state.nickname &&
            state.password1 &&
            state.password2 &&
            state.email &&
            state.gender &&
            state.description &&
            state.portfolio
        ) {
            fetch(`https://at-hackathon.herokuapp.com/auth/registration/`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    username: state.id,
                    password1: state.password1,
                    password2: state.password2,
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    localStorage.setItem("accessToken", json.access_token);
                    localStorage.setItem("refreshToken", json.refresh_token);
                    setUserId(json.user.pk);

                    fetch(`https://at-hackathon.herokuapp.com/profiles`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            nickname: state.nickname,
                            gender: state.gender,
                            description: state.description,
                            portfolio: state.portfolio,
                            email: state.email,
                            group_category1_favorite: state.category1,
                            group_category2_favorite: state.category2,
                            group_category3_favorite: state.category3,
                            user: json.user.pk,
                        }),
                    }).then((res) => {
                        if (res.ok) {
                            alert("회원가입이 완료되었습니다.");
                            router.push("/");
                        }
                    });
                });
        } else{
          alert("모든 항목을 입력해주세요.");
        }

    };

    return (
        <RegisterTemplate.Container className="wrapper">
            <RegisterTemplate.Section1>
                <div className="left">
                    <h1>당신의 프로필을 등록해보세요</h1>
                    <Input
                        label="아이디"
                        state={state.id}
                        setState={setItemState("id")}
                    />
                    <div className="vertical">
                        <Input
                            label="비밀번호"
                            state={state.password1}
                            setState={setItemState("password1")}
                            password
                        />
                        <Input
                            label="비밀번호 확인"
                            state={state.password2}
                            setState={setItemState("password2")}
                            password
                        />
                    </div>
                    <Input
                        label="이메일"
                        state={state.email}
                        setState={setItemState("email")}
                    />
                    <div className="vertical">
                        <Select label="성별">
                            <Chip
                                color={state.gender === 1 ? "primary" : "white"}
                                onClick={() => setItemState("gender")(1)}
                            >
                                남성
                            </Chip>
                            <Chip
                                color={state.gender === 2 ? "primary" : "white"}
                                onClick={() => setItemState("gender")(2)}
                            >
                                여성
                            </Chip>
                        </Select>
                        <FileInput
                            label="재학 증명서"
                            state={state.document}
                            setState={setItemState("document")}
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                        {previewImage && (
                            <img
                                className="profile_preview"
                                src={previewImage}
                                alt="프로필 사진"
                            />
                        )}
                    </div>
                    <FileInput
                        label="프로필 사진"
                        state={state.image}
                        setState={setItemState("image")}
                    />
                    <Input
                        label="닉네임"
                        state={state.nickname}
                        setState={setItemState("nickname")}
                    />
                    <div className="category">
                        <Select label="참가하고 싶은 모임 분야">
                            <Checkbox
                                label="프로젝트"
                                state={state.category1}
                                setState={setItemState("category1")}
                            />
                            <Checkbox
                                label="공모전"
                                state={state.category2}
                                setState={setItemState("category2")}
                            />
                            <Checkbox
                                label="스터디"
                                state={state.category3}
                                setState={setItemState("category3")}
                            />
                        </Select>
                    </div>
                </div>
            </RegisterTemplate.Section1>
            <div className="section">
                <Input
                    label="한 줄 PR"
                    state={state.description}
                    setState={setItemState("description")}
                    placeholder="본인의 능력을 어필할 수 있는 한 문장을 보여주세요!"
                />
                <Textarea
                    label="포트폴리오"
                    state={state.portfolio}
                    setState={setItemState("portfolio")}
                    placeholder="깃허브 링크, 포트폴리오 링크, 자격증, 경력, 소개 등 본인을 증명할 수 있는 링크와 소개를 첨부해주세요!"
                />
                <Select label="주특기">
                    <TopicSelect />
                </Select>
                <Select label="관심 분야">
                    <TopicSelect />
                </Select>
            </div>
            <div
                className="section"
                style={{ margin: "auto", width: "fit-content" }}
            >
                <Chip color="primary" size="large" onClick={handleSubmit}>
                    가입하기
                </Chip>
            </div>
        </RegisterTemplate.Container>
    );
};

export default RegisterPage;
