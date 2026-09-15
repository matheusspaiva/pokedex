import { FC, useState } from "react";
import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../components/Modal/useModal";
import { ITypeDetail } from "../types/ITypeDetail";
import getTipo from "../scripts/getTipo";
import { Type } from "../types/PokeInfo";
import "./../styles/index.css";

const ALL_TYPES = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy"
];

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

const SelectTypeSection: FC<{ tipos: Type[] }> = ({ tipos }) => {
    const [iTipo, setTipo] = useState<ITypeDetail[]>([]);
    const { isShown, toggle, setIsShown } = useModal();

    const handleName = async () => {
        try {
            const responses = await Promise.all(
                tipos.map((tipo) =>
                    fetch(`https://pokeapi.co/api/v2/type/${tipo.type.name}`)
                        .then((response) => response.json() as Promise<ITypeDetail>)
                )
            );

            setTipo(responses);
            setIsShown(true);
        } catch (error) {
            console.error("Erro ao buscar relações dos tipos:", error);
        }
    };

    const getMultiplier = (
        attackingType: string,
        defendingType: ITypeDetail
    ): number => {
        const relations = defendingType.damage_relations;

        if (
            relations.no_damage_from.some(
                (type) => type.name === attackingType
            )
        ) {
            return 0;
        }

        if (
            relations.double_damage_from.some(
                (type) => type.name === attackingType
            )
        ) {
            return 2;
        }

        if (
            relations.half_damage_from.some(
                (type) => type.name === attackingType
            )
        ) {
            return 0.5;
        }

        return 1;
    };

    const getDefensiveRelations = () => {
        return ALL_TYPES
            .map((type) => {
                const multiplier = iTipo.reduce(
                    (total, defendingType) =>
                        total * getMultiplier(type, defendingType),
                    1
                );

                return {
                    name: type,
                    multiplier
                };
            })
            .filter((type) => type.multiplier !== 1);
    };

    const getOffensiveAdvantages = () => {
        const advantages = new Set<string>();

        iTipo.forEach((pokemonType) => {
            pokemonType.damage_relations.double_damage_to.forEach((type) => {
                advantages.add(type.name);
            });
        });

        return ALL_TYPES
            .filter((type) => advantages.has(type))
            .map((type) => ({
                name: type
            }));
    };

    const defensiveRelations = getDefensiveRelations();

    const weaknesses = defensiveRelations
        .filter((type) => type.multiplier > 1)
        .sort((a, b) => b.multiplier - a.multiplier);

    const resistances = defensiveRelations
        .filter(
            (type) => type.multiplier > 0 && type.multiplier < 1
        )
        .sort((a, b) => a.multiplier - b.multiplier);

    const immunities = defensiveRelations.filter(
        (type) => type.multiplier === 0
    );

    const offensiveAdvantages = getOffensiveAdvantages();

    return (
        <>
            <Modal
                isShown={isShown}
                hide={toggle}
                modalContent={
                    <div className="type-modal-content">
                        <div className="type-modal-intro">
                            <span>ANÁLISE DE COMBATE</span>
                            <p>Multiplicadores calculados para a combinação de tipos deste Pokémon.</p>
                        </div>
                    <div id="menu">
                        <div className="column-type">
                            <p className="type-text">Fraquezas</p>

                            {weaknesses.length > 0 ? (
                                weaknesses.map((type) => (
                                    <div
                                        className="type-relation"
                                        key={type.name}
                                    >
                                        <img
                                            src={getTipo(type.name)}
                                            width={40}
                                            alt={TYPE_NAMES[type.name]}
                                            title={TYPE_NAMES[type.name]}
                                        />

                                        <span>×{type.multiplier}</span>
                                    </div>
                                ))
                            ) : (
                                <span>Nenhuma</span>
                            )}
                        </div>

                        <div className="column-type">
                            <p className="type-text">Resistências</p>

                            {resistances.length > 0 ? (
                                resistances.map((type) => (
                                    <div
                                        className="type-relation"
                                        key={type.name}
                                    >
                                        <img
                                            src={getTipo(type.name)}
                                            width={40}
                                            alt={TYPE_NAMES[type.name]}
                                            title={TYPE_NAMES[type.name]}
                                        />

                                        <span>×{type.multiplier}</span>
                                    </div>
                                ))
                            ) : (
                                <span>Nenhuma</span>
                            )}
                        </div>

                        <div className="column-type">
                            <p className="type-text">Imunidades</p>

                            {immunities.length > 0 ? (
                                immunities.map((type) => (
                                    <div
                                        className="type-relation"
                                        key={type.name}
                                    >
                                        <img
                                            src={getTipo(type.name)}
                                            width={40}
                                            alt={TYPE_NAMES[type.name]}
                                            title={TYPE_NAMES[type.name]}
                                        />
                                    </div>
                                ))
                            ) : (
                                <span>Nenhuma</span>
                            )}
                        </div>

                        <div className="column-type">
                            <p className="type-text">
                                Vantagens ofensivas
                            </p>

                            {offensiveAdvantages.length > 0 ? (
                                offensiveAdvantages.map((type) => (
                                    <div
                                        className="type-relation"
                                        key={type.name}
                                    >
                                        <img
                                            src={getTipo(type.name)}
                                            width={40}
                                            alt={TYPE_NAMES[type.name]}
                                            title={TYPE_NAMES[type.name]}
                                        />
                                    </div>
                                ))
                            ) : (
                                <span>Nenhuma</span>
                            )}
                        </div>
                    </div>
                    </div>
                }
                headerText="RELAÇÃO DE TIPOS"
            />

            <div className="section-type">
                <div className="type-Card" aria-label="Tipos do Pokémon">
                    <span className="type-label">Tipos</span>
                    {tipos.map((tipo) => (
                        <img
                            onClick={handleName}
                            key={tipo.type.name}
                            className="type-icon-trigger"
                            alt={TYPE_NAMES[tipo.type.name]}
                            title={TYPE_NAMES[tipo.type.name]}
                            width={40}
                            src={getTipo(tipo.type.name)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SelectTypeSection;
