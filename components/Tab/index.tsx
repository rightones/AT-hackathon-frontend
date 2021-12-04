import * as S from "./style"
import { useState } from "react";

interface Props{
  state: number;
  setState: (arg0: number) => void;
}

const Tab = ({state, setState}:Props) => {
  return <S.Wrapper>
    <S.Container>
      <S.Item active={state===1} onClick={() => setState(1)}>공모전</S.Item>
      <S.Item  active={state===2} onClick={() => setState(2)}>프로젝트</S.Item>
      <S.Item  active={state===3} onClick={() => setState(3)}>스터디</S.Item>

    </S.Container>
  </S.Wrapper>
}

export default Tab;