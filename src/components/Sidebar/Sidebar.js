import React from "react";
import  "./Sidebar.scss";

function Sidebar() {
  const containerNames = [
    "Dzień",
    "Godzina",
    "Prognoza",
    "Temperatura",
    "Opady",
    "Kierunek wiatru",
    "Prędkość wiatru",
    "Ciśnienie",
  ];
  return (
    <aside className="sidebar">
      {containerNames.map((name, index) => {
        return (
          <div
            className={
              name === "Dzień"
                ? "sidebar__container--day"
                : "sidebar__container"
            }
            key={index}
          >
            <p>{name}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
