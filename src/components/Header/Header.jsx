import './Header.scss';

function Header(props){
    const title = props.title;
    return (
        <header>
            <div className="title">
                {title}
            </div>
            {/* {
                title.toString().toLowerCase() === 'search'? 
                <div className="search-bar">
                    <input type="text" />
                </div> : null
            } */}
        </header>
    )
}

export default Header;