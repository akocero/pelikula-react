

const Card = () => {
    return (
        <div className="card card--cast">
            <div className="card__image-container">
                <img className="card__image" src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="card__content">
                <h3 className="card__content--title">
                    Francis Cuevas
                </h3>
                <p className="card__conetent--text">Serksis</p>
            </div>
        </div>
    );
}

export default Card;