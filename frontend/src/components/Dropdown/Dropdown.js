import '../../styles/Dropdown.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Dropdown(props) {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">{props.header}
                    <ArrowDropDownIcon style={{ paddingTop: "0.5rem"}}/>
                </button>
                <div className="dropdown-content">
                    {props.menuItems.map((item,index)=>(
                        item.type === 'anchor' ? (
                                <a href={item.path} key={index}>{item.title}</a>
                            ): <button className={'dropdown-button'} key={index} onClick={item.onClickHandler}>{item.title}</button>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Dropdown;
