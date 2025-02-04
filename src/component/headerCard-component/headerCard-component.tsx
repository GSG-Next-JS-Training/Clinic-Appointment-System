import Box from "@mui/material/Box";
import classes from "./style.module.css";
import { CardLabel } from "@clinic/types/header-card";

interface IProps {
  image: string;
  alt: string;
  count: number;
  label: CardLabel;
}

const HeaderCard: React.FC = (props: IProps) => {
  const hoverImage = `${props.image.split(".")[0]}-Hover.svg`;
  return (
    <Box 
    className={classes.cardBox}
    >
      <Box>
        <img 
        src={props.image} 
        alt={props.alt} 
        className={classes.cardImage} 
        />
        <img
          src={hoverImage}
          alt={props.alt}
          className={classes.cardImageHover}
        />
      </Box>
      <Box 
      className={classes.cardDetails}
      >
        <span 
        className={classes.cardNumber}
        >{props.count}
        </span>
        <span 
        className={classes.cardText}
        >{props.label}
        </span>
      </Box>
    </Box>
  );
};

export default HeaderCard;
