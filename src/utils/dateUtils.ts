export function getAge(birthday: Date) {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const month = today.getMonth() - birthday.getMonth();

  if (month === 0 && today.getDate() <= birthday.getDate()) {
    age--;
  }

  return age;
}

export function isBirthday(birthday: Date): boolean {
  const today = new Date();
  const birthDate = new Date(birthday);

  return (
    today.getMonth() === birthDate.getMonth() &&
    (today.getDate() === birthDate.getDate() ||
      today.getDate() === birthDate.getDate() + 1 ||
      today.getDate() === birthDate.getDate() + 2)
  );
}

export const dateIsBetween = (startDate: string, endDate: string): boolean => {
  const invalidDateStr = 'Invalid Date';
  const start = new Date(startDate);
  const end = new Date(endDate);

  if ([start.toString(), end.toString()].includes(invalidDateStr)) {
    throw new Error('dateIsBetween got called with invalid dates');
  }

  const now = new Date();

  return start < now && now < end;
};
