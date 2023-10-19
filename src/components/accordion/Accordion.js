import "./accordion.scss";

export default function Accordion() {
    return (
        <>
            <div className="accordion">
                <div className="accordion__container">
                    <section className="accordion__container--box">
                        <div className="accordion__container--box--number">1</div>

                        <p className="accordion__container--box--title">What is HTML?</p>

                        <div className="accordion__container--box--icon">
                            <span className="material-symbols-outlined">add</span>
                        </div>

                        <p className="accordion__container--box--body">
                            HTML Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet, dolores illo sequi
                            perspiciatis, fugiat beatae iste, quas culpa tenetur asperiores? Eius et incidunt eos illo animi vitae
                            quod ipsam.
                        </p>
                    </section>

                    <section className="accordion__container--box">
                        <div className="accordion__container--box--number">2</div>

                        <p className="accordion__container--box--title">What is CSS?</p>

                        <div className="accordion__container--box--icon">
                            <span className="material-symbols-outlined">add</span>
                        </div>

                        <p className="accordion__container--box--body hidden">
                            CSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet, dolores illo sequi
                            perspiciatis, fugiat beatae iste, quas culpa tenetur asperiores? Eius et incidunt eos illo animi vitae
                            quod ipsam.
                        </p>
                    </section>

                    <section className="accordion__container--box ">
                        <div className="accordion__container--box--number">3</div>

                        <p className="accordion__container--box--title">What is JavaScript?</p>

                        <div className="accordion__container--box--icon">
                            <span className="material-symbols-outlined">add</span>
                        </div>

                        <p className="accordion__container--box--body hidden">
                            JavaScript Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet, dolores illo sequi
                            perspiciatis, fugiat beatae iste, quas culpa tenetur asperiores? Eius et incidunt eos illo animi vitae
                            quod ipsam.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
