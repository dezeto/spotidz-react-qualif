import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import AlbumCard from "../../components/AlbumCard";
import Header from "../../components/Header/Header";
import './SearchPage.scss';

function SearchPage(){
    const [text, setText] = useState("");
    const [albums, setAlbums] = useState([]);
    
    let artist = "Day 6";
    // let albums = [];

    let textInputValue;
    
    const searchData = (e) =>{
        console.log(e.target.value);
        textInputValue = e.target.value;
        setText(textInputValue.toString());
        console.log(data.artist.albums);
        let newData;
        newData = data.artist.albums.filter(e => {
            return e.name.toLowerCase().includes(textInputValue.trim().toLowerCase());
        });
        console.log(newData);

        if (textInputValue === ""){
            // alert('test');
            setAlbums([]);
        } else{
            setAlbums(newData);
        }
    }

     const ARTIST_QUERY = gql`
        query GetArtist($n : String!){
            artist(name : $n){
                albums{
                    id
                    name
                    image
                }
            }
        }
    `;

    const {loading, error, data} = useQuery(ARTIST_QUERY, {
        variables : {
            n : artist
        }
    });

    if (loading) return <div className="loading">
        <h3>Loading...</h3>
    </div>

    

    // console.log(data);

    return (
        <React.Fragment>
            <Header title="Search"/>
            <main className="search-main">
                <form action="" className="form-input">
                    <input type="text" placeholder="Search song" onKeyUp={searchData}/>
                </form>
                <div className="search-container">
                    {albums?.map(album => {
                        return (
                            <AlbumCard album={album} artist={artist}/> 
                        );
                    })}
                </div>
            </main>
        </React.Fragment>
    );
}
export default SearchPage;