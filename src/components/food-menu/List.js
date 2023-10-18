import DATA from "./database";
import Card from "./Card";

export default function List() {
    return (
        <>
            <main className="food-container">
                {DATA.map((item) => (
                    <Card
                        key={item.id}
                        title={item.name}
                        imgSrc={item.image}
                        description={item.description}
                        price={item.price}
                        stock={item.stock}
                    />
                ))}
            </main>
        </>
    );
}
