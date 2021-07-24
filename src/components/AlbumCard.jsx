import { Link } from 'react-router-dom';
import './AlbumCard.scss';

function AlbumCard(props){
    const album = props.album;
    const name = props.artist;
    const url = `/album/${album.id}`;

    return (
        <Link to={url} key={album.id} className="card album-card">
            <img src={album.image} alt="" className="card-img-top"/>
            <div className="card-body">
                <h3 className="card-title">{album.name}</h3>
                <p className="card-subtitle">{name}</p>
            </div>
        </Link>
    )
}

export default AlbumCard;