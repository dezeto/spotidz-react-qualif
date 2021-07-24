import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import './HomePage.scss';
import AlbumCard from '../../components/AlbumCard';

function HomePage(){
    const name = "DAY 6"

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
            n : name
        }
    });

    if (loading) return <div className="loading">
        <h3>Loading...</h3>
    </div>
    
    const albums = data.artist.albums;

    return (
        <React.Fragment>
            <Header title="Home"/>
            <main className="home-main">
                {/* <h3>Main</h3> */}
                <div className="album-container">
                    {albums?.map(album => {
                        return (
                            <AlbumCard album={album} artist={name}/> 
                        );
                    })}
                </div>
            </main>
            {/* <Footer/> */}
        </React.Fragment>
    )   
}

export default HomePage;