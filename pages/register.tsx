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
                            alert("??????????????? ?????????????????????.");
                            router.push("/");
                        }
                    });
                });
        } else{
          alert("?????? ????????? ??????????????????.");
        }

    };

    return (
        <RegisterTemplate.Container className="wrapper">
            <RegisterTemplate.Section1>
                <div className="left">
                    <h1>????????? ???????????? ??????????????????</h1>
                    <Input
                        label="?????????"
                        state={state.id}
                        setState={setItemState("id")}
                    />
                    <div className="vertical">
                        <Input
                            label="????????????"
                            state={state.password1}
                            setState={setItemState("password1")}
                            password
                        />
                        <Input
                            label="???????????? ??????"
                            state={state.password2}
                            setState={setItemState("password2")}
                            password
                        />
                    </div>
                    <Input
                        label="?????????"
                        state={state.email}
                        setState={setItemState("email")}
                    />
                    <div className="vertical">
                        <Select label="??????">
                            <Chip
                                color={state.gender === 1 ? "primary" : "white"}
                                onClick={() => setItemState("gender")(1)}
                            >
                                ??????
                            </Chip>
                            <Chip
                                color={state.gender === 2 ? "primary" : "white"}
                                onClick={() => setItemState("gender")(2)}
                            >
                                ??????
                            </Chip>
                        </Select>
                        <FileInput
                            label="?????? ?????????"
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
                                alt="????????? ??????"
                            />
                        )}
                    </div>
                    <FileInput
                        label="????????? ??????"
                        state={state.image}
                        setState={setItemState("image")}
                    />
                    <Input
                        label="?????????"
                        state={state.nickname}
                        setState={setItemState("nickname")}
                    />
                    <div className="category">
                        <Select label="???????????? ?????? ?????? ??????">
                            <Checkbox
                                label="????????????"
                                state={state.category1}
                                setState={setItemState("category1")}
                            />
                            <Checkbox
                                label="?????????"
                                state={state.category2}
                                setState={setItemState("category2")}
                            />
                            <Checkbox
                                label="?????????"
                                state={state.category3}
                                setState={setItemState("category3")}
                            />
                        </Select>
                    </div>
                </div>
            </RegisterTemplate.Section1>
            <div className="section">
                <Input
                    label="??? ??? PR"
                    state={state.description}
                    setState={setItemState("description")}
                    placeholder="????????? ????????? ????????? ??? ?????? ??? ????????? ???????????????!"
                />
                <Textarea
                    label="???????????????"
                    state={state.portfolio}
                    setState={setItemState("portfolio")}
                    placeholder="????????? ??????, ??????????????? ??????, ?????????, ??????, ?????? ??? ????????? ????????? ??? ?????? ????????? ????????? ??????????????????!"
                />
                <Select label="?????????">
                    <TopicSelect />
                </Select>
                <Select label="?????? ??????">
                    <TopicSelect />
                </Select>
            </div>
            <div
                className="section"
                style={{ margin: "auto", width: "fit-content" }}
            >
                <Chip color="primary" size="large" onClick={handleSubmit}>
                    ????????????
                </Chip>
            </div>
        </RegisterTemplate.Container>
    );
};

export default RegisterPage;
