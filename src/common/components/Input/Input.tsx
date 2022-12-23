import React, {ChangeEvent, FC} from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    type?: string
    value: string | number
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    style?: object

}
export const Input: FC<InputPropsType> = ({
                                              type,
                                              onChange,
                                              value,
                                              style
                                          }) => {
    return (
        <TextField type={type}
                   color="secondary"
                   style={style}
                   size="small"
                   variant="outlined"
                   value={value}
                   onChange={onChange}/>
    )
}