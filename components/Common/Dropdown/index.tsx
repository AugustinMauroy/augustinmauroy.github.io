import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import Button from '../Button';
import styles from './index.module.css';
import type { FC, ReactNode } from 'react';

type DropdownProps = {
  trigger: ReactNode;
  triggerAriaLabel?: string;
  options: string[];
  activeOption?: string;
  onOptionSelect?: (option: string) => void;
};

const Dropdown: FC<DropdownProps> = ({
  options,
  trigger,
  triggerAriaLabel,
  activeOption,
  onOptionSelect,
}) => (
  <RadixDropdownMenu.Root>
    <RadixDropdownMenu.Trigger asChild>
      <Button
        aria-label={triggerAriaLabel}
        aria-haspopup="menu"
        aria-expanded={false}
      >
        {trigger}
      </Button>
    </RadixDropdownMenu.Trigger>

    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content className={styles.content}>
        {options.map(option => (
          <RadixDropdownMenu.Item
            key={option}
            className={classNames(styles.item, {
              [styles.active]: option === activeOption,
            })}
            onSelect={() => onOptionSelect?.(option)}
          >
            {option}
          </RadixDropdownMenu.Item>
        ))}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  </RadixDropdownMenu.Root>
);

export default Dropdown;
