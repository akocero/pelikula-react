

const Card = () => {
    return (
        <div className="card">
            <div className="card__image">
                <img src="https://picsum.photos/200/300" alt=""/>
            </div>
            <div className="card__content">
                <h3 className="card__content--title">
                    Francis Cuevas
                </h3>
                <p className="card__conetnt--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem itaque illum ullam saepe eos minima quas ad facilis est.</p>
            </div>
        </div>
    );
}
 
export default Card;