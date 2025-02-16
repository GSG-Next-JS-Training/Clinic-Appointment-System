import useAppointments from "@clinic/hooks/useAppointments";
import { CardLabel, ICard } from "@clinic/types/header-card";
import { createHeaderCard } from "@clinic/utils/header-card";

const useHeaderCard = () => {
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

  return { cards };
};

export default useHeaderCard;
