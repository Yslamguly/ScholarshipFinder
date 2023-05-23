import React, {useState} from "react";
import "../styles/Landing.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Landing({onSearch}) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = () => {
        onSearch(searchValue);
    };
    return (
        <div className="landing">
            <div className="landing-text">
                <h1>Find Scholarships to Finance Your Study</h1>
            </div>
            <div className="search-container" style={{
                background: 'white',
                padding: '13px',
                borderRadius: '8px',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center'
            }}>
                <TextField
                    sx={{width: 400, backgroundColor: "white"}}
                    id="demo-helper-text-misaligned-no-helper"
                    label="Search scholarships"
                    value={searchValue}
                    onChange={handleSearchChange}
                />
                <Button style={{
                    background: '#125be2',
                    fontWeight: 'bold',
                    marginLeft: '15px',
                    color: 'white',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '3px',
                    padding: '12px',
                    fontSize: '14px'
                }} variant="contained" onClick={handleSearchSubmit}>Find Scholarships</Button>
            </div>
        </div>
    );
}

// const countries = [
//   { label: 'United States of America' },
//   { label: 'China' },
//   { label: 'Japan' },
//   { label: 'Germany' },
//   { label: 'United Kingdom' },
//   { label: 'France' },
//   { label: 'Italy' },
//   { label: 'Brazil' },
//   { label: 'Canada' },
//   { label: 'South Korea' },
//   { label: 'Spain' },
//   { label: 'Australia' },
//   { label: 'Mexico' },
//   { label: 'Indonesia' },
//   { label: 'Netherlands' },
//   { label: 'Switzerland' },
//   { label: 'Saudi Arabia' },
//   { label: 'Turkey' },
//   { label: 'Poland' },
//   { label: 'Sweden' },
//   { label: 'Norway' },
//   { label: 'Austria' },
//   { label: 'Belgium' },
//   { label: 'Iran' },
//   { label: 'India' },
//   { label: 'Denmark' },
//   { label: 'United Arab Emirates' },
//   { label: 'South Africa' },
//   { label: 'Egypt' },
//   { label: 'Greece' },
//   { label: 'Argentina' },
//   { label: 'Portugal' },
//   { label: 'Colombia' },
//   { label: 'Finland' },
//   { label: 'Thailand' },
//   { label: 'Iraq' },
//   { label: 'Morocco' },
//   { label: 'Malaysia' },
//   { label: 'Peru' },
//   { label: 'Ukraine' },
//   { label: 'Venezuela' },
//   { label: 'Vietnam' },
//   { label: 'Philippines' },
//   { label: 'Israel' },
//   { label: 'Hong Kong' },
//   { label: 'Singapore' },
//   { label: 'Romania' },
//   { label: 'Czech Republic' },
//   { label: 'Hungary' },
//   { label: 'Ireland' },
//   { label: 'New Zealand' },
//   { label: 'Algeria' },
//   { label: 'Croatia' },
//   { label: 'Pakistan' },
//   { label: 'Chile' },
//   { label: 'Serbia' },
//   { label: 'Bangladesh' },
//   { label: 'Bulgaria' },
//   { label: 'Slovakia' },
//   { label: 'Slovenia' },
//   { label: 'Lithuania' },
//   { label: 'Nigeria' },
//   { label: 'Norway' },
//   { label: 'Kenya' },
//   { label: 'Tunisia' },
//   { label: 'Lebanon' },
//   { label: 'Jordan' },
//   { label: 'Ecuador' },
//   { label: 'Latvia' },
//   { label: 'Cyprus' },
//   { label: 'Dominican Republic' },
//   { label: 'Costa Rica' },
//   { label: 'Iceland' },
//   { label: 'Uruguay' },
//   { label: 'Panama' },
//   { label: 'Georgia' },
//   { label: 'Bosnia and Herzegovina' },
//   { label: 'Luxembourg' },
//   { label: 'Qatar' },
//   { label: 'Moldova' },
//   { label: 'Armenia' },
//   { label: 'Jamaica' },
//   { label: 'Albania' },
//   { label: 'Oman' },
//   { label: 'Kuwait' },
//   { label: 'Mongolia' },
//   { label: 'Namibia' },
//   { label: 'Ghana' },
//   { label: 'Botswana' },
//   { label: 'Gabon' },
//   { label: 'North Macedonia' },
//   { label: 'Sri Lanka' },
//   { label: 'Guinea' },
//   { label: 'Tajikistan' },
//   { label: 'Latvia' },
//   { label: 'Estonia' },
//   { label: 'Equatorial Guinea' },
//   { label: 'Mauritius' },
//   { label: 'Bahrain' },
//   { label: 'Trinidad and Tobago' },
//   { label: 'Eswatini' },
//   { label: 'Timor-Leste' },
//   { label: 'Fiji' },
//   { label: 'Guyana' },
//   { label: 'Djibouti' },
//   { label: 'Comoros' },
//   { label: 'Lesotho' },
//   { label: 'Maldives' },
//   { label: 'Brunei' },
//   { label: 'Cape Verde' },
//   { label: 'Sao Tome and Principe' },
//   { label: 'Saint Lucia' },
//   { label: 'Samoa' },
//   { label: 'Vanuatu' },
//   { label: 'Grenada' },
//   { label: 'Kiribati' },
//   { label: 'Micronesia' },
//   { label: 'Tonga' },
//   { label: 'Dominica' },
//   { label: 'Saint Kitts and Nevis' },
//   { label: 'Marshall Islands' },
//   { label: 'Palau' },
//   { label: 'Nauru' },
//   { label: 'Tuvalu' }
// ];
