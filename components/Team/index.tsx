import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as S from "./style";

function reducer(accumulator, value, index, array) {
    if (accumulator.hasOwnProperty(value)) {
        accumulator[value] = accumulator[value] + 1;
    } else {
        accumulator[value] = 1;
    }
    return accumulator;
}

const Team = ({ data }: { data: any }) => {
    const router = useRouter();
    const [positionState, setPositionState] = useState([]);
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
        <S.Container onClick={() => router.push(`/team/${data.id}`)}>
            <S.Image>
              {data.image &&
              <Image src={data.image} layout="fill" objectFit="cover" />}
            </S.Image>
            <S.Content>
                <h4>{data.name}</h4>
                <h5>한 줄 소개</h5>
                <p>{data.description}</p>
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
            </S.Content>
        </S.Container>
    );
};

export default Team;
