import React, {ChangeEvent, FC} from "react";
import {OutlinedInputProps, TextField} from "@material-ui/core";

type InputPropsType = {
    type?: string
    value?: string | number
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    style?: object
    InputProps?: Partial<OutlinedInputProps> | undefined
    className?: string
    placeholder?: string
    color?: "primary" | "secondary"

}
export const Input: FC<InputPropsType> = ({
                                              type,
                                              onChange,
                                              value,
                                              style,
                                              InputProps,
                                              className,
                                              placeholder,
                                              color
                                          }) => {
    return (
        <TextField type={type}
                   color={color ? color : "secondary"}
                   style={style}
                   size="small"
                   variant="outlined"
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
                   InputProps={InputProps}
                   className={className}
        />
    )
}