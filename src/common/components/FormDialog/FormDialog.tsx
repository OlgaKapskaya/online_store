import {FC, ReactNode} from "react";
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";


type FormDialogPropsType = {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    title: string
    description?: string
    form: ReactNode
}
export const FormDialog: FC<FormDialogPropsType> = ({isOpen, setIsOpen, title, description, form}) => {
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