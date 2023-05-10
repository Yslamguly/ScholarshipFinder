import '../../styles/Dropdown.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Dropdown(props) {
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">{props.header}
                    <ArrowDropDownIcon/>
                </button>
                <div className="dropdown-content">
                    {props.menuItems.map((item,index)=>(
                        item.type === 'anchor' ? (
                                <a href={item.path} key={index}>{item.title}</a>
                            ): <button className={'button'} onClick={item.onClickHandler}>{item.title}</button>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Dropdown;
