import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import Button from '../Button/index.tsx';

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
        aria-expanded={false}
        aria-haspopup="menu"
        aria-label={triggerAriaLabel}
      >
        {trigger}
      </Button>
    </RadixDropdownMenu.Trigger>

    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content className="m-2.5 border-2 border-black bg-white shadow-neo-brutalism-black dark:border-white dark:bg-neutral-950 dark:shadow-neo-brutalism-white">
        {options.map((option) => (
          <RadixDropdownMenu.Item
            className={classNames(
              'cursor-pointer px-4 py-2 hover:bg-green-300 focus:outline-hidden dark:hover:bg-green-700',
              {
                'bg-green-300 font-bold dark:bg-green-700':
                  option === activeOption,
              },
            )}
            key={option}
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
