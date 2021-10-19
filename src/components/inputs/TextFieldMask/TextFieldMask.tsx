import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";
// Components
import TextField from "../TextField/TextField";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
    mask: string;
}

const TextFieldMask = ({ mask, ...props }: TextFieldMaskProps) => {
    return (
        <InputMask mask={mask}>
            {() => {
                return <TextField {...props} />;
            }}
        </InputMask>
    );
};

export default TextFieldMask;
