import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { FaCreativeCommonsPdAlt } from "react-icons/fa";
import { MdCollectionsBookmark, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import './AlbumTrack.scss';

function AlbumTrack(props){
    const isFavorite = props.isFavorite;
    const album_thumbnail  = props.albumThumbnail; 
    const album_id = props.albumId;
    const id = props.id;
    const url = props.url;
    const name = props.name;
    // const [liked, setLiked] = useState(false);
    var favoriteItem = JSON.parse(localStorage.getItem("favorties"))
    const [liked , setLiked] = useState();
    
    useEffect(() => {
        var filteredFav
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites !== null){
            favorites.some(e => {
                if (e.id === id){
                    setLiked(true);
                    // console.log(liked)
                    return true;
                }
            });
        }
    }, [favoriteItem]);
    

    const addToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        if (!favorites){
            favorites = [];
        }

        let index = 0;
        let inLiked = false;
        favorites.some(e => {
            ++index;
            if (e.id === id){
                inLiked = true; 
                favorites.splice(index - 1, 1);
                return true;
            }
        });

        if (!inLiked){
            const newFavorite = {
                id : id,
                album_id : album_id,
                thumbnail : album_thumbnail,
                name : name,
                preview_url : url,
            }
            favorites.unshift(newFavorite);
        }

        setLiked(!inLiked);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    // let inLikedTrack;

    // let favorites = JSON.parse(localStorage.getItem('favorites'));
    // favorites.some(e => {
    //     if (e.id === id){
    //         // setLiked(true);
    //         liked = true;
    //         console.log(liked)
    //         return true;
    //     }
    // });
    // console.log(liked);

    // useEffect(() => {
    //     return () => {
    //     let favorites = JSON.parse(localStorage.getItem('favorites'));
    //     favorites.some(e => {
    //         if (e.id === id){
    //             setLiked(true);
    //             console.log(liked)
    //             return true;
    //         }
    // });
    // console.log(liked);
    //     }
    // }, [liked])

    return (
        <div className="track-card">
            {
                isFavorite ? 
                <Link to={`/album/${album_id}`}> 
                    <div className="track-card-thumbnail">
                        <img src={album_thumbnail} alt="" />
                    </div>
                </Link>
                : null
            }
            <div className="track-card-header">
                {
                    isFavorite ? 
                    <Link to={`/album/${album_id}`}> 
                        <h3 className="track-card-title">{name}</h3>
                    </Link>
                    : <h3 className="track-card-title">{name}</h3>
                }
                <button id="like-button" onClick={addToFavorites}>
                    {
                        liked === true ? 
                        <MdFavorite/> : 
                        <MdFavoriteBorder />
                    }
                </button>
            </div>
            <audio src={url} controls></audio>
        </div>
    );
}

export default AlbumTrack;