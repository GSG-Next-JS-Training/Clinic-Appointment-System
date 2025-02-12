export enum CardLabel {
  Pending = "Pending",
  Confirmed = "Confirmed",
  Appointments = "Appointments",
}

export const cardDetails: {
  [key in CardLabel]: { image: string; alt: string }
} = {
  [CardLabel.Pending]: { image: "Blue-Clock.svg", alt: "clock" },
  [CardLabel.Confirmed]: { image: "Blue-Check.svg", alt: "check" },
  [CardLabel.Appointments]: { image: "Blue-Calendar.svg", alt: "calendar" },
};

export interface ICard {
  count: number;
  label: CardLabel;
  image: string;
  alt: string;
}
