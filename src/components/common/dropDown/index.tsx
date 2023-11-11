'use client';
import { useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import styles from './index.module.css';
import type { FC, ReactNode } from 'react';

type DropdownProps = {
  title: ReactNode;
  options: string[];
  activeItem?: string;
  onItemClick?: (item: string) => void;
  customChildren?: ({
    children,
  }: {
    children: ReactNode | string;
  }) => ReactNode;
};

const Dropdown: FC<DropdownProps> = ({
  title,
  options,
  activeItem,
  onItemClick,
  customChildren,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const ListItem =
    customChildren ||
    (({ children }: { children: ReactNode }) => <>{children}</>);

  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button type="button" onClick={toggleDropdown}>
        {title}
      </button>
      <ul className={`${styles.dropdownList} ${isOpen ? styles.open : ''}`}>
        {options.map((option, index) => (
          <li
            key={index}
            className={`${styles.dropdownItem} ${
              option === activeItem ? styles.active : ''
            }`}
            onClick={() => onItemClick && onItemClick(option)}
          >
            <ListItem>{option}</ListItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
