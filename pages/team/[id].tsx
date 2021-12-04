import * as Template from "components/templates/TeamTemplate";
import Image from "next/image";
import { useEffect, useState } from "react";
import Chip from "../../components/Chip";
import Popup from "../../components/Popup";
import Textarea from "../../components/Textarea";

function reducer(accumulator, value, index, array) {
    if (accumulator.hasOwnProperty(value)) {
        accumulator[value] = accumulator[value] + 1;
    } else {
        accumulator[value] = 1;
    }
    return accumulator;
}

const TeamPage = ({ data }: { data: any }) => {
    const [positionState, setPositionState] = useState([]);
    const [popupState, setPopupState] = useState(false);
    useEffect(() => {
        fetch(
            `https://at-hackathon.herokuapp.com/teams/positions?team__id=${data.id}`,
            {
                method: "GET",
                headers: { "content-type": "application/json" },
            }
        )
            .then((res) => res.json())
            .then((json) => {
                setPositionState(json);
                console.log(positionState);
            });
    }, []);

    return (
        <Template.Container>
            <div className="section">
                <h2>
                    유레카! 원하시는 팀을 찾았나요?
                    <br />
                    어필하기를 눌러 메시지를 시작해보세요.
                </h2>
            </div>

            <div
                className="section"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "48px",
                }}
            >
              {data.image &&
              <Image
                        src={data.image}
                width={240}
                height={300}
                layout="fixed"
                objectFit="cover"
              />}
                <div>
                    <h2>{data.name}</h2>
                    <h5>필요한 포지션</h5>
                    {Object.entries(
                        positionState
                            .filter((item) => !item.user)
                            .map((item) => item.required_positions.name)
                            .reduce(reducer, {})
                    ).map(([key, value]) => (
                        <div key={key}>
                            {key} | {value}명{"   "}
                        </div>
                    ))}
                </div>
            </div>

            <div className="section">
                <div className="row">
                    <h3>소개</h3>
                    <p>{data.description}</p>
                </div>
                <div className="row">
                    <h3>우대 사항</h3>
                    <p>{data.specials}</p>
                </div>
            </div>
            <div style={{ margin: "32px auto 16px auto" }}>
                <Chip
                    color="primary"
                    size="large"
                    onClick={() => setPopupState(true)}
                >
                    어필하기
                </Chip>
            </div>
            <div style={{ margin: "0 auto" }}>
                <h4>이제 당신의 유레카를 찾아보세요!</h4>
            </div>
            {popupState && <Popup message_to={data.leader} team={data.id} close={() => setPopupState(false)} />}
        </Template.Container>
    );
};

export const getServerSideProps = async (ctx) => {
    const data = await fetch(
        `https://at-hackathon.herokuapp.com/teams/${ctx.params.id}`
    ).then((res) => res.json());
    return { props: { data } };
};

export default TeamPage;
