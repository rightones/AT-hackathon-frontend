import { useEffect, useState } from "react";
import * as S from "./style";

const TopicSelect = () => {
    const [positionData, setPositionData] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState<number>();

    useEffect(() => {
        fetch(`https://at-hackathon.herokuapp.com/positions`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((json) => setPositionData(json));
    }, []);

    return (
        <S.Container>
            <S.Left>
                {positionData?.map((item) => (
                    <S.Position
                        key={item.id}
                        onClick={() => setSelectedPosition(item.id)}
                        active={selectedPosition === item.id}
                    >
                        {item.name}
                    </S.Position>
                ))}
            </S.Left>
        </S.Container>
    );
};

export default TopicSelect;
