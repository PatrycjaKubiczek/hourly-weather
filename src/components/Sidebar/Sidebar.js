import React from "react";
import styles from "./_Sidebar.module.scss";

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
    <aside className={styles.sidebar}>
      {containerNames.map((name, index) => {
        return (
          <div
            className={styles.sidebar__container}
            key={index}
            style={{
              height: name === "dzień" ? "50px" : "auto",
            }}
          >
            <p>{name}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
