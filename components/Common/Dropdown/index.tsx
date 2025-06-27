import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import Button from '../Button/index.tsx';
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
      <RadixDropdownMenu.Content className="m-2.5 border-2 border-black bg-white shadow-neo-brutalism-black dark:border-white dark:bg-neutral-950 dark:shadow-neo-brutalism-white">
        {options.map(option => (
          <RadixDropdownMenu.Item
            key={option}
            className={classNames(
              'cursor-pointer px-4 py-2 hover:bg-green-300 focus:outline-none dark:hover:bg-green-700',
              {
                ['bg-green-300 font-bold dark:bg-green-700']:
                  option === activeOption,
              }
            )}
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
