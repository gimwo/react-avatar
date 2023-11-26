import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.pinimg.com/originals/74/56/2e/74562eaa4f80074f98fa3df200af215b.jpg"
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
      <Skill level={3} name="HTML+CSS" bgColor="blue" />
      <Skill level={3} name="JavaScript" bgColor="yellow" />
      <Skill level={2} name="MongoDB" bgColor="lightgreen" />
      <Skill level={1} name="Node.js" bgColor="green" />
      <Skill level={2} name="Express.js" bgColor="pink" />
      <Skill level={3} name="React.js" bgColor="lightblue" />
    </div>
  );
}

function Skill({ name, bgColor, level }) {
  return (
    <span style={{ backgroundColor: `${bgColor}` }} className="skill">
      {name} {level == 3 ? "💪🏼" : level == 2 ? "👍🏼" : "🐣"}
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
