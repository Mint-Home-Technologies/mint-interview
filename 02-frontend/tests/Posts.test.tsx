import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Posts } from "../src/Posts";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: "title 1" }]),
  })
) as jest.Mock;

describe("Posts component", () => {
  it("renders posts fetched from API", async () => {
    render(<Posts />);
    await waitFor(() =>
      expect(screen.getByText("title 1")).toBeInTheDocument()
    );
  });
});
