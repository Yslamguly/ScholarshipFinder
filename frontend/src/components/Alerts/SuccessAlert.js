import {AlertTitle} from "@mui/material";
import Alert from "@mui/material/Alert";

export const SuccessAlert = ({showSuccess, setShowSuccess, message}) => {
    return (
        showSuccess === true ? <Alert severity="success" onClose={() => setShowSuccess(false)}>
            <AlertTitle>Success</AlertTitle>
            {message}
        </Alert> : null
    )
}
