import moment from "moment";

export function removeOpacityHandler(image: HTMLImageElement) {
  image.classList.remove('opacity-0');
}

export function getYear(date: string) {
  const current = moment(date, 'YYYY');

  return current.year();
}