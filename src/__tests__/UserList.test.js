import { render, screen, within } from "@testing-library/react";
import UserList from "../components/UserList";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  return {
    users,
  };
}

//   screen.logTestingPlaygroundURL();

test("UserList renders one row per user", () => {
  renderComponent();

  // Find all the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});

test("UserList renders the email and name of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
