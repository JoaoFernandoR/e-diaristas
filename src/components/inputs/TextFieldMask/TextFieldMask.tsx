import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";
// Components
import TextField from "../TextField/TextField";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
    mask: string;
    value: string;
}

const TextFieldMask = ({
    mask,
    value,
    onChange,
    ...props
}: TextFieldMaskProps) => {
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            {() => {
                return <TextField {...props} />;
            }}
        </InputMask>
    );
};

export default TextFieldMask;
