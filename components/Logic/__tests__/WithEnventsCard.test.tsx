import { render } from '@testing-library/react';
import { IntlProvider } from 'next-intl';
import { vi, describe, it, expect } from 'vitest';
import messages from '~/i18n/locales/en.json' with { type: 'json' };
import WithEventsCard from '../WithEnventsCard.tsx';

// Mocking the date utility functions
vi.mock('~/utils/date', () => ({
  isToday: (date: string) => date === '2023-09-23',
  isInRange: (currentDate: string, startDate: string, endDate: string) =>
    currentDate >= startDate && currentDate <= endDate,
}));

describe('WithEventsCard', () => {
  it('renders correctly with no events', () => {
    const { container } = render(
      <IntlProvider locale="en" messages={messages}>
        <WithEventsCard />
      </IntlProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with a single event', () => {
    const { container } = render(
      <IntlProvider locale="en" messages={messages}>
        <WithEventsCard />
      </IntlProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with multiple events', () => {
    const { container } = render(
      <IntlProvider locale="en" messages={messages}>
        <WithEventsCard />
      </IntlProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
