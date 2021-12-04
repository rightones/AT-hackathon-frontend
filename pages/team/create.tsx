import * as Template from "components/templates/TeamTemplate";
import Image from "next/image";
import { useEffect, useState } from "react";
import Chip from "../../components/Chip";
import Tab from "../../components/Tab";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { idStore } from "../_app";
import { useRecoilState } from "recoil";
import PositionSelect from "components/PositionSelect";

function reducer(accumulator, value, index, array) {
    if (accumulator.hasOwnProperty(value)) {
        accumulator[value] = accumulator[value] + 1;
    } else {
        accumulator[value] = 1;
    }
    return accumulator;
}

const TeamPage = () => {
    const [positionState, setPositionState] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [state, setState] = useState({
        name: "",
        description: "",
        specials: "",
        subject: "",
    });

    const setItem = (item: string) => (arg: string) => setState(old=>{
        return {...old, [item]: arg}
    })

    const [tab, setTab] = useState(1);

    const [userId, setUserId] = useRecoilState(idStore);

    const handleSubmit = () => {
        if (state.name && state.description && state.specials && state.subject && userId) {
            fetch(`https://at-hackathon.herokuapp.com/teams`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    name: state.name,
                    description: state.description,
                    specials: state.specials,
                    subject: state.subject,
                    category: tab,
                    leader: userId,
                    members: [],
                    positions:[]
                }),
            }).then((res) => {
                if (res.ok) {
                    alert("완료되었습니다.");
                    close();
                }
            });
        } else {
            alert("모든 항목을 입력해주세요");
        }
    };

    return (
        <Template.Container>
            <div className="section">
                <h2>
                    팀 프로필을 등록하고
                    <br />
                    당신의 유레카를 발견해보세요!
                </h2>
            </div>
            <Tab state={tab} setState={setTab} />

            <div className="section">
                <Input label="팀 이름" state={state.name} setState={setItem("name")} />
                <Input label="팀 소개" state={state.description} setState={setItem("description")} />
                <Textarea
                    label="주제 소개"
                    state={state.subject}
                    setState={setItem("subject")}
                />
                <Textarea
                    label="우대사항"
                    state={state.specials}
                    setState={setItem("specials")}
                />
                <PositionSelect/>
            </div>
            <div
              className="section"
              style={{ margin: "auto", width: "fit-content" }}
            >
                <Chip color="primary" size="large" onClick={handleSubmit}>만들기
                </Chip>
            </div>
        </Template.Container>
    );
};

export default TeamPage;
