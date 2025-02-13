export enum CardLabel {
  Pending = "Pending",
  Confirmed = "Confirmed",
  Appointments = "Appointments",
}

export const cardDetails: {
  [key in CardLabel]: { image: string; alt: string }
} = {
  [CardLabel.Pending]: { image: "/public/Blue-Clock.svg", alt: "clock" },
  [CardLabel.Confirmed]: { image: "/public/Blue-Check.svg", alt: "check" },
  [CardLabel.Appointments]: { image: "/public/Blue-Calendar.svg", alt: "calendar" },
};

export interface ICard {
  count: number;
  label: CardLabel;
  image: string;
  alt: string;
}
