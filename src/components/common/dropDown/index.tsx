'use client';
import classNames from 'classnames';
import { useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import styles from './index.module.css';
import type { FC, ReactNode } from 'react';

type DropdownProps = {
  title: ReactNode;
  options: string[];
  activeItem?: string;
  onItemClick?: (item: string) => void;
};

const Dropdown: FC<DropdownProps> = ({
  title,
  options,
  activeItem,
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button type="button" onClick={toggleDropdown}>
        {title}
      </button>
      <ul
        className={classNames(styles.dropdownList, {
          [styles.open]: isOpen,
        })}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={`${styles.dropdownItem} ${
              option === activeItem ? styles.active : ''
            }`}
            onClick={() => onItemClick && onItemClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
