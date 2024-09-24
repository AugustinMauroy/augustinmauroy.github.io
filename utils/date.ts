export const getAge = (date: Date): number => {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// also called isBetween
export const isInRange = (
  date: string,
  startDate: string,
  endDate: string,
  careAboutYear = false
): boolean => {
  const currentDate = new Date(date);
  const currentStartDate = new Date(startDate);
  const currentEndDate = new Date(endDate);

  if (!careAboutYear)
    return (
      currentDate.getDate() >= currentStartDate.getDate() &&
      currentDate.getDate() <= currentEndDate.getDate() &&
      currentDate.getMonth() >= currentStartDate.getMonth() &&
      currentDate.getMonth() <= currentEndDate.getMonth()
    );

  return (
    currentDate.getDate() >= currentStartDate.getDate() &&
    currentDate.getDate() <= currentEndDate.getDate() &&
    currentDate.getMonth() >= currentStartDate.getMonth() &&
    currentDate.getMonth() <= currentEndDate.getMonth() &&
    currentDate.getFullYear() >= currentStartDate.getFullYear() &&
    currentDate.getFullYear() <= currentEndDate.getFullYear()
  );
};

export const isToday = (date: string, careAboutYear = false): boolean => {
  const currentDate = new Date(date);
  const today = new Date();

  if (!careAboutYear)
    return (
      currentDate.getDate() === today.getDate() &&
      currentDate.getMonth() === today.getMonth()
    );

  return (
    currentDate.getDate() === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear()
  );
};

// day of birth + 3 days after
export const isBirthday = (date: string): boolean => {
  const currentDate = new Date();
  const currentStartDate = new Date(date);
  const currentEndDate = new Date(date);

  currentEndDate.setDate(currentEndDate.getDate() + 3);

  //return currentDate >= currentStartDate && currentDate <= currentEndDate;
  // don't care about year
  return isInRange(
    currentDate.toISOString(),
    currentStartDate.toISOString(),
    currentEndDate.toISOString()
  );
};
