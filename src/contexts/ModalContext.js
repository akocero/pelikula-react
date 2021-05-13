import React, { createContext, useState, useEffect } from 'react';
import request from '../url/request';
import axios from 'axios';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
    const [trailer, setTrailer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [movieID, setMovieID] = useState('567189');
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        document.body.style.overflow = "hidden";
        // document.querySelector('.navbar').style.zIndex = '1';
        // document.querySelector('.fade-effect').style.zIndex = '1';

        setShowModal(!showModal);

        if (showModal) {
            document.body.style.overflow = "auto";
            // document.querySelector('.navbar').style.zIndex = '10000';
            // document.querySelector('.fade-effect').style.zIndex = '100';
        }
        // console.log('toggle')
    }

    useEffect(() => {
        const abortCont = new AbortController();
        const fetchItems = async () => {

            const result = await axios(
                `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${request.apikey}&language=en-US`,
                { signal: abortCont.signal }
            );
            // console.log(result.data);

            setTrailer(result.data);


            setIsLoading(false);

            return () => {
                abortCont.abort();
                console.log('fetch aborted');
            };

        }

        fetchItems();

    }, [movieID]);

    return (
        <ModalContext.Provider value={{ trailer, isLoading, setMovieID, toggleModal, showModal }}>
            {props.children}
        </ModalContext.Provider>

    )
}



export default ModalContextProvider;

