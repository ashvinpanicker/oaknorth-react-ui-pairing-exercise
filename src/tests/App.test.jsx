import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

describe("Loan applications dashboard view", () => {
  test('renders a table', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // Deprecated
          removeListener: jest.fn(), // Deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
    });
    render(<App/>);
    expect(screen.getByText('Client Details')).toBeInTheDocument();
  }, 5)
});
