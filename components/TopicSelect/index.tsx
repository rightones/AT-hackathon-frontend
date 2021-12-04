import { useEffect, useState } from "react";
import * as S from "./style";

const TopicSelect = () => {
    const [positionData, setPositionData] = useState([]);
    const [topicData, setTopicData] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState<number>();
    const [selectedTopic, setSelectedTopic] = useState<number[]>([]);

    useEffect(() => {
        fetch(`https://at-hackathon.herokuapp.com/positions`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((json) => setPositionData(json));
    }, []);

    useEffect(() => {
       if(selectedPosition) fetch(
            `https://at-hackathon.herokuapp.com/topics?related_positions__id=${selectedPosition}`,
            {
                method: "GET",
                headers: { "content-type": "application/json" },
            }
        )
            .then((res) => res.json())
            .then((json) => setTopicData(json));
    }, [selectedPosition]);

    useEffect(() => {
        fetch("");
    }, [selectedPosition]);

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
            <S.Right>
                {topicData?.map((item) => (
                  <S.Topic
                    key={item.id}
                    onClick={() =>
                            setSelectedTopic((old) => selectedTopic.includes(item.id)?old.filter(i=>i!==item.id):[...old, item.id])
                        }
                    active={selectedTopic.includes(item.id)}
                >
                    {item.name}
                </S.Topic>))}
            </S.Right>
        </S.Container>
    );
};

export default TopicSelect;
