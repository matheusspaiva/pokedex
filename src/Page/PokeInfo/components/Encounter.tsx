import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TbMap } from "react-icons/tb";
import { pokeApi } from "../../../api/pokeApi";
import { Modal } from "../../../components/Modal/Modal";
import { IEncounter } from "../types/IEncounter";
import "../styles/index.css";

interface EncounterProps {
    id: number;
}

interface IRoute {
    location: string;
    games: string[];
}

const formatName = (name: string) =>
    name.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

const Encounter: React.FC<EncounterProps> = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [routes, setRoutes] = useState<IRoute[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadData = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await pokeApi.get<IEncounter[]>(`/pokemon/${id}/encounters`);
            setRoutes(response.data.map((encounter) => ({
                location: encounter.location_area.name,
                games: encounter.version_details.map((detail) => detail.version.name),
            })));
        } catch {
            setRoutes([]);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const totalGames = useMemo(
        () => new Set(routes.flatMap((route) => route.games)).size,
        [routes]
    );

    return (
        <>
            <button type="button" className="evolution-button" onClick={() => setIsOpen(true)} aria-label="Ver locais de encontro" title="Locais de encontro">
                <TbMap aria-hidden="true" />
                <span className="sr-only">Locais de encontro</span>
            </button>

            <Modal
                isShown={isOpen}
                hide={() => setIsOpen(false)}
                headerText="LOCAIS DE ENCONTRO"
                modalContent={
                    <section className="encounter-content" aria-live="polite">
                        {isLoading ? (
                            <p className="encounter-message">Carregando locais...</p>
                        ) : routes.length === 0 ? (
                            <p className="encounter-message">Não há locais de encontro cadastrados para este Pokémon.</p>
                        ) : (
                            <>
                                <div className="encounter-summary">
                                    <strong>{routes.length}</strong>
                                    <span>
                                        {routes.length === 1 ? "área encontrada" : "áreas encontradas"}
                                        {totalGames > 0 && ` em ${totalGames} ${totalGames === 1 ? "jogo" : "jogos"}`}
                                    </span>
                                </div>
                                <div className="encounter-list">
                                    {routes.map((route) => (
                                        <article className="encounter-card" key={route.location}>
                                            <h3>{formatName(route.location)}</h3>
                                            <div>
                                                <span className="encounter-label">Disponível em</span>
                                                <ul className="encounter-games">
                                                    {route.games.map((game) => <li key={game}>{formatName(game)}</li>)}
                                                </ul>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </>
                        )}
                    </section>
                }
            />
        </>
    );
};

export default Encounter;
