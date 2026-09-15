import { FC, useMemo, useState } from "react";
import { FaHandRock } from "react-icons/fa";
import { Modal } from "../../../components/Modal/Modal";

import getTipo from "../scripts/getTipo";
import LocalStorage from "../../../Utils/LocalStorage";
import "./../styles/index.css";

interface IMove {
    name: string;
    power: number | null;
    type: string;
    accuracy: number | null;
    pp: number;
}

interface IPokemonMove {
    move: {
        name: string;
        url: string;
    };
    version_group_details: {
        level_learned_at: number;
        move_learn_method: {
            name: string;
        };
        version_group: {
            name: string;
        };
    }[];
}

interface MovesSectionProps {
    moves: IPokemonMove[];
}

const TYPE_NAMES: Record<string, string> = {
    normal: "Normal",
    fire: "Fogo",
    water: "Água",
    electric: "Elétrico",
    grass: "Grama",
    ice: "Gelo",
    fighting: "Lutador",
    poison: "Veneno",
    ground: "Terrestre",
    flying: "Voador",
    psychic: "Psíquico",
    bug: "Inseto",
    rock: "Pedra",
    ghost: "Fantasma",
    dragon: "Dragão",
    dark: "Sombrio",
    steel: "Aço",
    fairy: "Fada"
};

const MovesSection: FC<MovesSectionProps> = ({ moves }) => {
    const [isShown, setIsShown] = useState(false);

    const toggle = () => {
        setIsShown((prev) => !prev);
    };

    const levelMoves = useMemo(() => {
        const allMoves = LocalStorage.get<IMove[]>("poke-moves") ?? [];

        return moves
            .flatMap((pokemonMove) => {
                const levelDetails = pokemonMove.version_group_details.filter(
                    (detail) =>
                        detail.move_learn_method.name === "level-up" &&
                        detail.version_group.name === "scarlet-violet"
                );

                return levelDetails.map((detail) => ({
                    name: pokemonMove.move.name,
                    level: detail.level_learned_at
                }));
            })
            .map((pokemonMove) => {
                const moveData = allMoves.find(
                    (move) => move.name === pokemonMove.name
                );

                if (!moveData) {
                    return null;
                }

                return {
                    ...moveData,
                    level: pokemonMove.level
                };
            })
            .filter(
                (
                    move
                ): move is IMove & {
                    level: number;
                } => move !== null
            )
            .sort((a, b) => a.level - b.level);
    }, [moves]);

    return (
        <>
            <button
                type="button"
                onClick={toggle}
                className="moves-button"
                aria-label="Ver movimentos por nível"
                title="Movimentos por nível"
            >
                <FaHandRock aria-hidden="true" />
                <span className="sr-only">Movimentos por nível</span>
            </button>

            <Modal
                isShown={isShown}
                hide={toggle}
                headerText="MOVIMENTOS POR NÍVEL"
                modalContent={
                    <div className="moves-container">
                        {levelMoves.length === 0 ? (
                            <p>Nenhum movimento encontrado.</p>
                        ) : (
                            levelMoves.map((move) => (
                                <div
                                    className="move-card"
                                    key={`${move.name}-${move.level}`}
                                >
                                    <div className="move-level">
                                        Lv. {move.level}
                                    </div>

                                    <div className="move-info">
                                        <h3>
                                            {move.name.replace(/-/g, " ")}
                                        </h3>

                                        <div className="move-details">
                                            <div>
                                                <strong>Tipo</strong>

                                                <img
                                                    src={getTipo(move.type)}
                                                    alt={TYPE_NAMES[move.type]}
                                                    title={TYPE_NAMES[move.type]}
                                                    width={40}
                                                />
                                            </div>

                                            <div>
                                                <strong>Poder</strong>
                                                <span>
                                                    {move.power ?? "—"}
                                                </span>
                                            </div>

                                            <div>
                                                <strong>Precisão</strong>
                                                <span>
                                                    {move.accuracy !== null
                                                        ? `${move.accuracy}%`
                                                        : "—"}
                                                </span>
                                            </div>

                                            <div>
                                                <strong>PP</strong>
                                                <span>{move.pp}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                }
            />
        </>
    );
};

export default MovesSection;
