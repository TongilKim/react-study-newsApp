import { fireEvent, render, screen } from "@testing-library/react";
import Categories from "./Categories";
import "@testing-library/jest-dom";

test("Categories render Test", () => {
  render(<Categories />);

  [
    "전체보기",
    "비즈니스",
    "엔터테인먼트",
    "건강",
    "과학",
    "스포츠",
    "기술",
  ].forEach((category) => {
    const textElement = screen.getByText(category);
    expect(textElement).toBeInTheDocument();
  });
});

test("Click Category Test", () => {
  const handleClick = jest.fn();
  render(<Categories onSelect={handleClick} />);

  const clickedElement = screen.getByText("비즈니스");
  fireEvent.click(clickedElement);
  expect(handleClick).toBeCalledTimes(1);
});
