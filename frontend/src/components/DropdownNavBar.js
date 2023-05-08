import {styled} from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import {useState} from "react";

export const BootstrapInput = styled(InputBase)(({theme}) => ({
    'label + &': {
        marginTop: theme.spacing(0),
    },
    '& .MuiInputBase-input': {
        borderRadius: 0,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: 0,
        fontSize: 11,
        padding: '0px',
        // transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
        // '&:focus': {
        //     borderRadius: 4,
        //     borderColor: '#80bdff',
        //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        // },
    },
}));

export default function DropdownNavBar() {
    const categories = {
        master: "Master",
        bachelor: "Bachelor",
        phd: "PHD"
    }
    const categoryValues = Object.values(categories);

    const [category, setCategory] = useState(' ')
    const handleChange = (event) => {
        setCategory(event.target.value)
        window.location.href = event.target.value
    };
    return (
        <div>
            <FormControl sx={{m: 1}} variant="standard">
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={category}
                    onChange={handleChange}
                    input={<BootstrapInput/>}
                >
                    <MenuItem value="/">
                        <em>All scholarships</em>
                    </MenuItem>
                    {
                        categoryValues.map((category) => (
                            <MenuItem key={category} value={category}>{category} scholarships</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
}
