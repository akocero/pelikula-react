import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import request from '../url/request';
const Modal = () => {

    // useEffect(() => {
    //     return () => {
    //         document.body.style.overflow = "auto";
    //     }
    // }, [])

    // const { data, isLoading } = useData(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${request.apikey}&language=en-US`);
    // console.log('new', data.results.length);

    const { trailer, isLoading, toggleModal, showModal } = useContext(ModalContext);

    return showModal &&
        <div className="modal">
            <div onClick={() => toggleModal()} className="modal__btn-close">&#10005;</div>
            <div className="video_wrapper">
                {trailer?.results?.length === 0 && isLoading ? 'No Trailer Available' : <iframe width="100%" height="100%" src={request.youtube + trailer?.results[0].key} title="youtube-trailer"></iframe>}
            </div>
        </div>
        ;
}

export default Modal;