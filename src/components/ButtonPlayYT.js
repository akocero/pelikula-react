import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const ButtonPlayYT = ({ movieID }) => {

    const { toggleModal, setMovieID } = useContext(ModalContext);
    return (
        <button className="btn-floating" onClick={() => { toggleModal(); setMovieID(movieID); }}>&#9658;</button>
    );
}

export default ButtonPlayYT;