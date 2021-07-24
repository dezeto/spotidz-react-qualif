import { AiFillHome} from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import './Footer.scss';

function Footer(){

    return (
        <footer>
           <Link to={`/`} className="footer-item">
               <AiFillHome/>
               <div className="title">
                   Home
               </div>
           </Link>
           <Link to={`/search`} className="footer-item">
               <FaSearch/>
               <div className="title">
                   Search
               </div>
           </Link>
           <Link to={`/favorite`} className="footer-item">
               <MdFavorite/>
               <div className="title">
                   Favorites
               </div>
           </Link>
        </footer>
    )
}

export default Footer;