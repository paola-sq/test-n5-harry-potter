import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { QueryKeys } from "../helpers/enums/queryKeys";
import { getCharacters } from "../api/characterApi";
import { Status } from "../helpers/enums/status";
import styled from "styled-components";
import Card from "./Card";
import Spinner from "./Spinner";

const ContainerCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Characters() {
  const { t } = useTranslation();
  const [characters, setCharacters] = useState([]);
  const { data, status, isLoading } = useQuery({
    queryKey: [QueryKeys.Characters],
    queryFn: getCharacters,
  });
  const showCharacters = !isLoading && characters.length;

  useEffect(() => {
    if (status === Status.Success) {
      setCharacters(data.results);
    }
  }, [data, status]);

  const filtered = useMemo(() => {
    return [...characters];
  }, [characters]);


  const renderSpinner = isLoading && <Spinner text={t("consulting")} />;

  const renderCharacters = () => {
    return (
      showCharacters && (
        <div>
          <ContainerCharacters>
            {renderCards() || renderEmptyState}
          </ContainerCharacters>
        </div>
      )
    );
  };

  const renderCards = () => {
    return (
      filtered.length &&
      filtered.map((character, index) => (
        <Card
          img={character.image}
          name={character.name}
          house={character.house.toLowerCase()}
          patronus={character.patronus}
          actor={character.actor}
          key={character.name + index}
        />
      ))
    );
  };

  return <div>{renderCharacters() || renderSpinner}</div>;
}

export default Characters;
