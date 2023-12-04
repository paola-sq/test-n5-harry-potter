import styled from "styled-components";
import Label from "./Label";
import InputHouse from "./InputHouse";
import { Colors } from "../helpers/enums/colors";
import { useTranslation } from "react-i18next";
import { Houses } from "../helpers/enums/house";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';


const { gryffindor } = Houses;
const { GreyLight, Green, Red} = Colors;

const CardContainer = styled.div`
  border: 1px solid ${GreyLight};
  margin: 6px auto;
  padding: 10px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5); 
  }
  width: 330px;
  cursor: pointer;
`;

const Image = styled.img`
width: 180px;
height: 240px;
border-radius: 8px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Name = styled.p`
  font-size: 12px;
`;

function Card({ name, img, house, patronus, actor }) {
  const { t } = useTranslation();
  const bgHouse = house === gryffindor ? Red : Green;
  const houseText = house;

  return (
    <CardContainer id={name} >
      <HeaderContainer>

      <div>
        <Image src={img} />
      </div>
        <div>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '2px' }} />
          <Label text={t("character.name")} />
          <Name>{name}</Name>
   
          <FontAwesomeIcon icon={faHouse} style={{ marginRight: '2px' }} />
          <Label text={t("character.house")} />
          <InputHouse
            text={t(`${houseText}`)}
            background={bgHouse}
          />
          <FontAwesomeIcon icon={faMagic} style={{ marginRight: '2px' }} />
          <Label text={t("character.patronus")} />
          <Name>{patronus}</Name>

          <FontAwesomeIcon icon={faPerson} style={{ marginRight: '2px' }} />
          <Label text={t("character.actor")} />
          <Name>{actor}</Name>
        </div>
      
      </HeaderContainer>
    </CardContainer>
  );
}

export default Card;
