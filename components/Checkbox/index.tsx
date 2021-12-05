import { HiCheckCircle, HiOutlineCheckCircle } from "react-icons/hi";
import { BsCircle } from "react-icons/bs";
import * as S from "./style";

interface Props {
    label: string;
    state: boolean;
    setState: (arg0: boolean) => void;
}

const Checkbox = ({ label, state, setState }: Props) => {
    return (
        <S.Container onClick={() => setState(!state)}>
            <button type="button" className="check">
                {state ? <HiCheckCircle /> : <BsCircle />}
            </button>
            {label}
        </S.Container>
    );
};

export default Checkbox;
