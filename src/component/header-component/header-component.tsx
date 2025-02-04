import Box from "@mui/material/Box";
import classes from "./style.module.css"; 
import HeaderCard from "../headerCard-component";
import { CardLabel, ICard } from "@clinic/types/header-card";
import { createHeaderCard } from "@clinic/utils/header-card";

const HeaderComponent = () => {
  const cards: ICard[] = [
    createHeaderCard(50, CardLabel.Pending),
    createHeaderCard(80, CardLabel.Confirmed),
    createHeaderCard(30, CardLabel.Appointments),
  ];

  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.headerContent}>
        {cards.map((card, index) => (
          <HeaderCard
            key={index}
            count={card.count}
            image={card.image}
            label={card.label}
            alt={card.alt}
          >
          </HeaderCard>
        ))}
      </Box>
    </Box>
  );
};

export default HeaderComponent;
