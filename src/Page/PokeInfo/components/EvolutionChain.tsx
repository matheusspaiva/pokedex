import React, { useState } from "react";
import "../styles/EvolutionChain.css";
import { IEvolutionChain } from "../types/IEvolutionChain";
import { TbHierarchy2 } from "react-icons/tb";
interface EvolutionChainProps {
    evolution: IEvolutionChain;
}

interface EvolutionNodeProps {
    node: any;
    isRoot?: boolean;
}

const EvolutionChain: React.FC<EvolutionChainProps> = ({ evolution }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!evolution?.chain) {
        return null;
    }

    const getPokemonId = (url: string): string => {
        const match = url.match(/\/(\d+)\/?$/);

        return match ? match[1] : "";
    };

    const getPokemonImage = (url: string): string => {
        const id = getPokemonId(url);

        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    };

    const formatName = (name: string): string => {
        return name
            .split("-")
            .map(
                (part) =>
                    part.charAt(0).toUpperCase() + part.slice(1)
            )
            .join(" ");
    };

    const formatMethod = (details: any[]): string => {
        if (!details || details.length === 0) {
            return "";
        }

        // A PokéAPI possui várias condições para diferentes versões.
        // Preferimos a condição marcada como padrão.
        const detail =
            details.find((item) => item.is_default) || details[details.length - 1];

        if (!detail) {
            return "";
        }

        if (detail.item) {
            return `Usar ${formatName(detail.item.name)}`;
        }

        if (detail.trigger?.name === "level-up") {
            if (detail.min_level) {
                return `Nível ${detail.min_level}`;
            }

            if (detail.min_happiness) {
                if (detail.time_of_day === "day") {
                    return "Amizade alta durante o dia";
                }

                if (detail.time_of_day === "night") {
                    return "Amizade alta durante a noite";
                }

                return "Amizade alta";
            }

            if (detail.min_affection) {
                if (detail.known_move_type) {
                    return `Afeto alto + movimento do tipo ${formatName(
                        detail.known_move_type.name
                    )}`;
                }

                return "Afeto alto";
            }

            if (detail.known_move) {
                return `Conhecer ${formatName(detail.known_move.name)}`;
            }

            if (detail.known_move_type) {
                return `Conhecer movimento do tipo ${formatName(
                    detail.known_move_type.name
                )}`;
            }

            if (detail.location) {
                return `Evoluir em ${formatName(detail.location.name)}`;
            }

            if (detail.near_special_rock) {
                return "Próximo a uma rocha especial";
            }

            if (detail.time_of_day) {
                return `Durante o ${detail.time_of_day === "day" ? "dia" : "noite"}`;
            }

            return "Subir de nível";
        }

        if (detail.trigger?.name === "trade") {
            if (detail.held_item) {
                return `Trocar segurando ${formatName(detail.held_item.name)}`;
            }

            if (detail.trade_species) {
                return `Trocar por ${formatName(detail.trade_species.name)}`;
            }

            return "Troca";
        }

        if (detail.trigger?.name === "shed") {
            return "Após perder HP suficiente";
        }

        if (detail.trigger?.name) {
            return formatName(detail.trigger.name);
        }

        return "Condição especial";
    };

    const EvolutionNode: React.FC<EvolutionNodeProps> = ({
        node,
        isRoot = false,
    }) => {
        const evolutions = node.evolves_to || [];

        return (
            <div className={`evolution-node ${isRoot ? "root-node" : ""}`}>
                <div className="pokemon-card">
                    <img
                        src={getPokemonImage(node.species.url)}
                        alt={node.species.name}
                        className="pokemon-image"
                    />

                    <span className="pokemon-name">
                        {formatName(node.species.name)}
                    </span>
                </div>

                {evolutions.length > 0 && (
                    <div
                        className={`evolution-branches ${
                            evolutions.length > 1 ? "multiple" : "single"
                        }`}
                    >
                        {evolutions.map((nextNode: any, index: number) => (
                            <div className="evolution-branch" key={index}>
                                <div className="evolution-arrow">
                                    <span className="arrow">↓</span>

                                    <span className="evolution-method">
                                        {formatMethod(
                                            nextNode.evolution_details
                                        )}
                                    </span>
                                </div>

                                <EvolutionNode node={nextNode} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>

            <button
                type="button"
                className="evolution-button"
                onClick={() => setIsOpen(true)}
            >
                <TbHierarchy2/>

            </button>

            {isOpen && (
                <div
                    className="evolution-modal-overlay"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="evolution-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="evolution-modal-header">
                            <h2>Evolução</h2>

                            <button
                                type="button"
                                className="evolution-close"
                                onClick={() => setIsOpen(false)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="evolution-modal-content">
                            <EvolutionNode
                                node={evolution.chain}
                                isRoot
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EvolutionChain;