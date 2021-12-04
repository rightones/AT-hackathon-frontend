import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Textarea from "../Textarea";
import Chip from "../Chip";
import { idStore } from "../../pages/_app";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    border-radius: 16px;
    background: white;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 600px;
    gap: 32px;
`;

const Position = styled.div<{ active: boolean }>`
    padding: 8px 16px;
    background: ${({ active }) => (active ? "#eee" : "white")};
    border-radius: 12px;
    cursor: pointer;
`;

interface Props {
    team: number;
    message_to: number;
    close: () => void;
}

const Popup = ({ team, close, message_to }: Props) => {
    const [userId, setUserId] = useRecoilState(idStore);
    const router = useRouter();

    const [message, setMessage] = useState("");
    const [positionData, setPositionData] = useState("");
    const [select, setSelect] = useState<number>();

    useEffect(() => {
        fetch(
            `https://at-hackathon.herokuapp.com/teams/positions?team__id=${team}`
        )
            .then((res) => res.json())
            .then((json) => setPositionData(json));
    }, [team]);

    useEffect(() => {
        if (!userId) {
            alert("먼저 로그인해주세요.");
            router.push("/login");
        }
    }, []);

    const handleSubmit = () => {
        if (select) {
            fetch(`https://at-hackathon.herokuapp.com/messages`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    team_position: select,
                    user_from: userId,
                    content: message,
                    user_to: message_to,
                }),
            }).then((res) => {
                if (res.ok) {
                    alert("완료되었습니다.");
                    close();
                }
            });
        } else {
            alert("포지션을 선택해주세요");
        }
    };

    return (
        <Container onClick={close}>
            <Wrapper onClick={(e) => e.stopPropagation()}>
                <h3>어필하기</h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {positionData
                        ? positionData?.map((item) => (
                              <Position
                                  key={item.id}
                                  active={select === item.id}
                                  onClick={() => setSelect(item.id)}
                              >
                                  {item.required_positions.name}
                              </Position>
                          ))
                        : null}
                </div>
                <Textarea
                    label=""
                    placeholder="메세지"
                    state={message}
                    setState={setMessage}
                />
                <Chip color="primary" onClick={handleSubmit}>
                    보내기
                </Chip>
            </Wrapper>
        </Container>
    );
};

export default Popup;
