import * as S from "./style";

interface Props {
    label: string;
    state: string;
    setState: (arg0: string) => void;
    password?: boolean;
    placeholder?: string;
}

const Input = ({ label, state, setState, password=false , placeholder}: Props) => {
    return (
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Input
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder={placeholder??label}
                type={password ? "password" : "text"}
            />
        </S.Container>
    );
};

export default Input;
