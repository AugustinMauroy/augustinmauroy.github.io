export function getAge(birthday: Date) {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
}

export function isBirthday(birthday: Date): boolean {
  const today = new Date();
  const birthDate = new Date(birthday);

  return (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate()
  );
}

export function isBetweenDates(startDate: string, endDate: string): boolean {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  return today >= start && today <= end;
}
