import Alert from "@mui/material/Alert";
import {AlertTitle} from "@mui/material";

export const ErrorAlert = ({showError,setShowError,message}) =>{
    return(
        showError === true ? <Alert severity="error" onClose={()=>setShowError(false)}>
                <AlertTitle>Error</AlertTitle>
                {message}
            </Alert> : null

    )
}
