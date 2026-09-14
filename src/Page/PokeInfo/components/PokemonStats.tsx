import React from "react";
import './../styles/PokemonStats.css';

interface Stat {
  name: string;
  base_stat: number;
}

interface PokemonStatsProps {
  stats: Stat[];
}

const MAX_STAT = 255;
const SEGMENTS = 15;

const statNames: Record<string, string> = {
  hp: "PS",
  attack: "Ataque",
  defense: "Defesa",
  "special-attack": "Ataque\nEspecial",
  "special-defense": "Defesa\nEspecial",
  speed: "Velocidade",
};

export function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <div className="pokemon-stats">
              <div className="stats-container">
        {stats.map((stat) => {
          const filledSegments = Math.round(
            (stat.base_stat / MAX_STAT) * SEGMENTS
          );

          return (
            <div className="stat" key={stat.name}>
              <div className="stat-bars">
                {Array.from({ length: SEGMENTS }).map((_, index) => (
                  <div
                    key={index}
                    className={`stat-segment ${
                      index < filledSegments ? "filled" : ""
                    }`}
                  />
                ))}
              </div>

              <div className="stat-name">
                {statNames[stat.name]
                  ?.split("\n")
                  .map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}