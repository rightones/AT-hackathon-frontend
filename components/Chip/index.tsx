import { MouseEventHandler } from "react";
import * as S from "./style";

interface Props {
    children: React.ReactNode;
    color: "primary" | "secondary" | "white";
    size?: "medium" | "large";
    onClick: MouseEventHandler;
}

const Chip = ({ children, color, onClick, size = "medium" }: Props) => {
    return (
        <S.Container color={color} onClick={onClick} size={size}>
            {children}
        </S.Container>
    );
};

export default Chip;
