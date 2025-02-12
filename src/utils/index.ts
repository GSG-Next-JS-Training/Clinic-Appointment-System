export const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
        slots.push(`${hour}:00 - ${hour + 1}:00`);
    }
    return slots;
};