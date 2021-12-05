import * as S from "./style";

interface Props {
    label: string;
    state: string;
    setState: (arg0) => void;
}

const Input = ({ label, state, setState }: Props) => {
    return (
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Input
                onChange={(e) => setState(e.target.files[0])}
                type="file"
                accept="image/*"
            />
        </S.Container>
    );
};

export default Input;
