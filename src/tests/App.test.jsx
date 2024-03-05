import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App.jsx";

describe("Loan applications dashboard view", () => {
  test("renders welcome message", () => {
    render(<App />);
    expect(screen.getByText(/Welcome to OakNorth/i)).toBeInTheDocument();
  });

  test("renders the table", () => {
    beforeAll(() => {
      Object.defineProperty(window, "matchMedia", {
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
    render(<App />);
    expect(screen.getByText("Client Details")).toBeInTheDocument();
  }, 5);

  test("search functionality works correctly", async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText("Search by Client's Name");

    fireEvent.change(searchInput, { target: { value: "Alice" } });

    await waitFor(() => {
      expect(screen.queryByText("Alice Jones")).toBeInTheDocument();
      expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    });
  });

  test("table sorting works correctly", async () => {
    render(<App />);
    // Testing for name column
    const clientDetailsColumnHeader = screen.getByText("Client Details");

    fireEvent.click(clientDetailsColumnHeader);

    await waitFor(() => {
      const tableRows = screen.getAllByRole("row", { name: /Row/ });
      const clientNames = tableRows.map((row) => row.cells[0].textContent);

      for (let i = 0; i < clientNames.length - 1; i++) {
        expect(clientNames[i] <= clientNames[i + 1]).toBeTruthy();
      }
    });
  });

  test("help button redirects to FAQ page", () => {
    const { getByText } = render(<App />);

    const helpButton = getByText("Help");

    // Record the URL when window.open is called
    let redirectedUrl;
    window.open = (url) => { redirectedUrl = url; };

    fireEvent.click(helpButton);

    // Check if window.location.assign is called with the expected URL
    expect(redirectedUrl).toBe("https://oaknorth.co.uk/faqs/personal/");
  });
});
