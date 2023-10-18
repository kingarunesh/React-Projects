export default function Card({ imgSrc, title, description, price, stock }) {
    return (
        <>
            <article className="food-container__card" style={{ filter: `${!stock ? "grayscale(100%)" : ""}` }}>
                <div className="food-container__card--img">
                    <img src={imgSrc} alt={title} />
                </div>

                <div className="food-container__card--content">
                    <h3>{title}</h3>

                    <p className="food-container__card--content-description">{description}</p>

                    <p className="food-container__card--content-price">
                        <span>{price}</span>
                    </p>

                    <div>{stock ? <button>Add To Cart</button> : <p className="not-available">Currently Not Available</p>}</div>
                </div>
            </article>
        </>
    );
}
