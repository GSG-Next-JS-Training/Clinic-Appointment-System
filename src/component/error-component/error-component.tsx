import React from "react";
import classes from "./style.module.css";
import { Box } from "@mui/material";

interface IProps {
  imgPath: string;
  altText: string;
}

const ErrorComponent: React.FC<IProps> = (props: IProps) => {
  return (
    <Box className={classes.errorComponent}>
      <img
        src={props.imgPath}
        alt={props.altText}
       className={classes.errorImage}
      />
    </Box>

  );
};

export default ErrorComponent;