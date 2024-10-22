import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...classes) {
  return classNames(twMerge(classes));
}

export function scrollToSectionById(id) {
  const targetElement = document.querySelector(`#${id}`);
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
