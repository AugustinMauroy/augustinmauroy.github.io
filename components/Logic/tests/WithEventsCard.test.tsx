import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { render } from '@testing-library/react';
import { IntlProvider } from 'next-intl';
import WithEventsCard from '~/components/Logic/WithEventsCard.tsx';
import messages from '~/i18n/locales/en.json' with { type: 'json' };

describe('WithEventsCard', () => {
  it('renders the Pride Month event', (t) => {
    // Mock Date.prototype.toISOString to return a date during Pride Month
    const mockToISOString = t.mock.method(
      Date.prototype,
      'toISOString',
      () => '2023-06-15T12:00:00.000Z',
    );

    const { container } = render(
      <IntlProvider locale="en" messages={messages}>
        <WithEventsCard />
      </IntlProvider>,
    );

    // Check for the Pride Month title
    assert.ok(container.querySelector('h1'));
    assert.strictEqual(
      container.querySelector('h1')?.textContent,
      'Pride Month',
    );
    t.assert.snapshot(container.innerHTML);

    mockToISOString.mock.restore();
  });

  it('does not render when no events match', (t) => {
    // Mock Date.prototype.toISOString to return a date that doesn't match any events
    const mockToISOString = t.mock.method(
      Date.prototype,
      'toISOString',
      () => '2023-01-15T12:00:00.000Z',
    );

    const { container } = render(
      <IntlProvider locale="en" messages={messages}>
        <WithEventsCard />
      </IntlProvider>,
    );

    // Should not render any content when no events match
    assert.strictEqual(container.innerHTML, '');

    mockToISOString.mock.restore();
  });
});
