import Box from "@mui/material/Box";
import classes from "./style.module.css";
import { CardLabel, ICard } from "@clinic/types/header-card";
import { createHeaderCard } from "@clinic/utils/header-card";
import HeaderCard from "../card-header";
import useAppointments from "@clinic/hooks/useAppointments";

const Header = () => {
  const { appointments } = useAppointments();

  const statusDetails = appointments.reduce(
    (acc, person) => {
      acc[person.status] = (acc[person.status] || 0) + 1;
      acc.All += 1;
      return acc;
    },
    { All: 0 } as Record<string, number>
  );

  const cards: ICard[] = [
    createHeaderCard(statusDetails.Pending, CardLabel.Pending),
    createHeaderCard(statusDetails.Confirmed, CardLabel.Confirmed),
    createHeaderCard(statusDetails.All, CardLabel.Appointments),
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
          />
        ))}
      </Box>
    </Box>
  );
};

export default Header;
