import { render, screen } from "@testing-library/react";
import NewsItem from "./NewsItem";
import "@testing-library/jest-dom";

test("NewsItem render Test", () => {
  const title = "test title";
  const description = "test description";
  const url = null;
  const urlToImage = null;

  render(
    <NewsItem
      article={{
        title: title,
        description: description,
        url: url,
        urlToImage: urlToImage,
      }}
    />
  );

  const titleTestEl = screen.getByText(title);
  const descTestEl = screen.getByText(description);

  expect(titleTestEl).toBeInTheDocument();
  expect(descTestEl).toBeInTheDocument();
});
