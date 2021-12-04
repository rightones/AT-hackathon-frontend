import Image from "next/image";
import { useEffect, useState } from "react";
import * as S from "./style";

function reducer(accumulator, value, index, array) {
  if (accumulator.hasOwnProperty(value)) {
    accumulator[value] = accumulator[value] + 1;
  } else {
    accumulator[value] = 1;
  }
  return accumulator;
}


const Profile = ({ data }: { data: any }) => {
    const [positionState, setPositionState] = useState([]);
    useEffect(() => {
        fetch(`https://at-hackathon.herokuapp.com/teams/positions?team__id=${data.id}`, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((json) => {
              setPositionState(json);
              console.log(
                positionState);
            });

    }, []);
    return (
        <S.Container>
            <S.Image>{data.image&&
            <Image src={data.image} layout="fill" objectFit="cover" />}
            </S.Image>
            <S.Content>
                <h4>{data.nickname}</h4>
                <h5>주특기</h5>
                <h5>지역</h5>
              <p>{data.address}</p>
                <h5>학교</h5>
              <p>{data.school}</p>

            </S.Content>
        </S.Container>
    );
};

export default Profile;
