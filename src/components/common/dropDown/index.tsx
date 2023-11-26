'use client';
import classNames from 'classnames';
import { useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import Button from '../button';
import styles from './index.module.css';
import type { FC, ReactNode } from 'react';

type DropdownProps = {
  title: ReactNode;
  options: string[];
  activeItem?: string;
  onItemClick?: (_item: string) => void;
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
      <Button variant="icon" type="button" onClick={toggleDropdown}>
        {title}
      </Button>
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
