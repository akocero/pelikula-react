import request from '../url/request';

const Card = ({person}) => {
    // console.log('person', person)
    return (
        <div className="card card--cast">
            <div className="card__image-container">
                <img className="card__image" src={request.imagePath + person.profile_path} alt="" />
            </div>
            <div className="card__content">
                <h5 className="card__content--title">
                    { person.name }
                </h5>
                <label className="card__conetent--text">{person.character}</label>
            </div>
        </div>
    );
}

export default Card;