export default function formatDate(inputDate: Date): string {
  const currentDate: Date = new Date();
  const inputYear: number = inputDate.getFullYear();
  const currentYear: number = currentDate.getFullYear();

  if (inputDate.toDateString() === currentDate.toDateString()) {
    return "сегодня";
  } else if (
    inputDate.toDateString() ===
    new Date(currentDate.getTime() - 86400000).toDateString()
  ) {
    return "вчера";
  } else {
    if (inputYear === currentYear) {
      const options = { day: "numeric", month: "short" } as const;
      return inputDate.toLocaleDateString("ru-RU", options);
    } else {
      const options = {
        day: "numeric",
        month: "short",
        year: "numeric",
      } as const;
      return inputDate.toLocaleDateString("ru-RU", options);
    }
  }
}


export function formatDateToDDMMYYYY(date: Date):string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Месяцы начинаются с 0
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}


export function parseDDMMYYYYToDate(dateString: string): Date {
  const [day, month, year] = dateString.split(".").map(Number);
  return new Date(year, month - 1, day); // Месяцы начинаются с 0
}