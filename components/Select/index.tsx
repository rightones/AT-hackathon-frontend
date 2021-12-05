import * as S from "./style";

interface Props {
    label: string;
    children: React.ReactNode;
}

const Input = ({ label, children }: Props) => {
    return (
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Choice>{children}</S.Choice>
        </S.Container>
    );
};

export default Input;
