export const generateTimeSlots = () =>
  Array.from({ length: 8 }, (_, i) => `${i + 9}:00 - ${i + 10}:00`);

export const generateAccessToken = () =>
  Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);

export const getCurrentTimeInMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

export const hourToMinutes = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};
