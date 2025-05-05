import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList";

test("UserList renders one row per user", () => {
  const users = [
    {
      name: "jane",
      email: "jane@jane.com",
    },
    { name: "sam", email: "sam@sam.com" },
  ];

  const { container } = render(<UserList users={users} />);

  //   screen.logTestingPlaygroundURL();

  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(2);
});

test("UserList renders the email and name of each user", () => {});
