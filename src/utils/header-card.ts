import { cardDetails } from "@clinic/types/header-card";
import { CardLabel } from "@clinic/types/header-card";
import { ICard } from "@clinic/types/header-card";

export const createHeaderCard = (count: number, label: CardLabel): ICard => ({
  count,
  label,
  image: cardDetails[label].image,
  alt: cardDetails[label].alt,
});
