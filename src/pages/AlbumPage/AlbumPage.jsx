import { gql, useQuery } from "@apollo/client";
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import AlbumTrack from "../../components/AlbumTrack/AlbumTrack";
import Header from "../../components/Header/Header";
// import { FaPlay } from "react-icons/fa";
import './AlbumPage.scss';

function AlbumPage(){
    let {id} = useParams();
    // useEffect(() => {
    //     fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setTracks(data.data);
    //     });
    // }, []);

    const TRACKS_QUERY = gql`
        query GetTracks($id:String!){
            album(id:$id){
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
        }
    `;

    const {loading, error, data} = useQuery(TRACKS_QUERY, {
        variables : {
            id : id
        }
    });

    if (loading) return <div className="loading">
        <h3>Loading...</h3>
    </div>

    let image = data.album?.image;
    let albumName = data.album?.name;
    const tracks = data.album?.tracks;

    return (
        <React.Fragment>
            <Header title={albumName}/>
            <main className="album-main">
                <div className="track-container">
                    <div className="track-container-header">
                        <div className="track-container-header-image">
                            <img src={image} alt="" />
                        </div>
                        <div className="track-container-header-title">
                            {albumName}
                        </div>
                    </div>
                    <div className="track-main">
                        {tracks?.map(track => {
                        return (
                            <AlbumTrack name={track.name} url={track.preview_url} albumId={id} albumThumbnail={image} id={track.id}/>
                        )
                    })}
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}
export default AlbumPage;