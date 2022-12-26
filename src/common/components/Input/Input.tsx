import React, {ChangeEvent, FC} from "react";
import {TextField} from "@material-ui/core";
import {TextFieldProps} from "@material-ui/core/TextField/TextField";

type InputPropsType = TextFieldProps & {
    value?: string | number
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    color?: "primary" | "secondary"
    label?: string | false | undefined
    helperText?: string | false | undefined

}
export const Input: FC<InputPropsType> = ({
                                              onChange,
                                              value,
                                              InputProps,
                                              color,
                                              label,
                                              helperText,
                                              ...restProps
                                          }) => {
    return (
        <TextField
                   label={label}
                   color={color ? color : "secondary"}
                   size="small"
                   helperText={helperText}
                   value={value}
                   onChange={onChange}
                   {...restProps}
        />
    )
}