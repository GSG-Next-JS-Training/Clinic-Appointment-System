import Box from "@mui/material/Box";
import classes from "./style.module.css";
import HeaderCard from "../card-header";
import useHeaderCard from "./hooks/useHeaderCard";

const Header = () => {
  const { cards } = useHeaderCard();
  
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
          />
        ))}
      </Box>
    </Box>
  );
};

export default Header;
