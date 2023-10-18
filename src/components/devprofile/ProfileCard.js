import Image from "./Image";

const SKILLS = [
    {
        id: 1,
        skill: "HTML",
        level: "advance",
        bgColor: "green",
    },

    {
        id: 2,
        skill: "CSS",
        level: "advance",
        bgColor: "pink",
    },

    {
        id: 3,
        skill: "JavaScript",
        level: "intermediate",
        bgColor: "yellow",
    },
    {
        id: 4,
        skill: "Python",
        level: "advance",
        bgColor: "orange",
    },
    {
        id: 5,
        skill: "Redux.JS",
        level: "beginner",
        bgColor: "orangered",
    },

    {
        id: 6,
        skill: "React.JS",
        level: "intermediate",
        bgColor: "blue",
    },
    {
        id: 7,
        skill: "Next.JS",
        level: "beginner",
        bgColor: "grey",
    },
    {
        id: 8,
        skill: "MongoDB",
        level: "intermediate",
        bgColor: "greenyellow",
    },
];

export default function ProfileCard() {
    return (
        <>
            <div className="profileCard">
                <div className="profileCard__image">
                    <Image src="assets/img/person.jpg" alt="Profile" />
                </div>

                <div className="profileCard__about">
                    <h2>Arunesh kumar</h2>

                    <p>
                        I'm Full Stack Developer. I can build any project from sctarch using of all latest technology like Python,
                        JavaScript, React, React Native, MongoDB, SQL and more.
                    </p>

                    <div className="profileCard__about--skills">
                        {SKILLS.map((skill) => (
                            <div key={skill.id} style={{ backgroundColor: skill.bgColor }}>
                                {skill.skill} {skill.level === "advance" ? "💪" : skill.level === "intermediate" ? "😊" : "💀"}
                            </div>
                        ))}
                    </div>

                    <div className="profileCard__about--contact">
                        <button>Contact Me</button>
                    </div>
                </div>
            </div>
        </>
    );
}
