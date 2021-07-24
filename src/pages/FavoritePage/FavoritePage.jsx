import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlbumTrack from '../../components/AlbumTrack/AlbumTrack';
import Header from '../../components/Header/Header';
import './FavoritePage.scss';

function FavoritePage(){
    const [favorites, setFavorites] = useState([]);
    // var favoriteItem = JSON.parse(localStorage.getItem("favorties"))
    // const [liked , setLiked] = useState();
    
    // useEffect(() => {
    //     setFavorites(JSON.parse(localStorage.getItem('favorites')));
    // }, [favoriteItem]);
    

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('favorites')));
    }, []);

    return(
        <React.Fragment>
            <Header title="Your Favorite"/>
            <main className="favorite-main">
                {favorites?.map(e => {
                    return (
                        <div className="favorite-card">
                            <AlbumTrack albumThumbnail={e.thumbnail} albumId={e.album_id} name={e.name} url={e.preview_url} id={e.id} isFavorite="true"/>
                        </div>
                    )
                    }
                )}
            </main>
        </React.Fragment>
    )
}

export default FavoritePage;