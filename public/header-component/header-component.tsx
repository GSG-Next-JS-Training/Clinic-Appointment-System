import Box from "@mui/material/Box";
import classes from "./style.module.css"; // Also works
import HeaderCard from "../headercard-component";
import { CardLabel, ICard } from "../../types/header-card";
import { createHeaderCard } from "../../utils/header-card";

const cards: ICard[] = [
  createHeaderCard(50, CardLabel.Pending),
  createHeaderCard(80, CardLabel.Confirmed),
  createHeaderCard(30, CardLabel.Appointments),
];



const HeaderComponent = () => {
  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.headerContent}>
        {
          cards.map((card,index)=>(
            <HeaderCard key={index} count={card.count} image={card.image} label={card.label} alt= {card.alt}></HeaderCard>
          ))
        }
      </Box>
    </Box>
  );
};


export default HeaderComponent;




