import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "MongoDB",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "React.js",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Express.js",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Node.js",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "purple",
  },
];

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.pinimg.com/originals/74/56/2e/74562eaa4f80074f98fa3df200af215b.jpg"
      alt="avatar-img"
    />
  );
}

function Intro() {
  return (
    <>
      <h1>Miguel Alviar</h1>
      <p>
        Full-stack web developer from the Philippines. I like learning and
        studying especially when it is about code! I also like playing video
        games and work out.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill level={skill.level} name={skill.skill} bgColor={skill.color} />
      ))}
    </div>
  );
}

function Skill({ name, bgColor, level }) {
  return (
    <span style={{ backgroundColor: bgColor }} className="skill">
      {name} {level === "advanced" && "💪🏼"}
      {level === "intermediate" && "👍🏼"}
      {level === "beginner" && "🐣"}
    </span>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
