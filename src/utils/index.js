import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...classes) {
  return classNames(twMerge(classes));
}

export function scrollToSectionById(id) {
  const idHash = `#${id}`;
  const targetElement = document.querySelector(idHash);
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState({}, '', window.location.origin + idHash);
}
