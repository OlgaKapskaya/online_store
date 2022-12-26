import {FC, ReactNode} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {ButtonUC} from "../Buttons/Button/ButtonUC";


type FormDialogPropsType = {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    title: string
    description?: string
    form: ReactNode
    buttonName: string
}
export const FormDialog: FC<FormDialogPropsType> = ({isOpen, setIsOpen, title, description, form, buttonName}) => {
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle> {title} </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {description}
                </DialogContentText>
                {form}
            </DialogContent>
        </Dialog>
    )
}