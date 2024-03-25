import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export function RouteButton() {
  //we need to know what route we are in
  //so we use a hook
  const location = useLocation();

  const buttonRoute = {
    '/': (
      <>
        <Button variant="dark" size="lg">Login</Button>
        <Button variant="outline-secondary" size="lg">Create Account</Button>
      </>
    ),
    '/add': (
      <>
        <Button variant="dark" size="lg">Add Expense</Button>
        <Button variant="outline-secondary" size="lg">Modify Expense</Button>
      </>
    ),
    '/modify': (
      <>
        <Button variant="dark" size="lg">Delete Expense</Button>
        <Button variant="outline-secondary" size="lg">Change Expense</Button>
      </>
    ),
    '/view': (
      <>
        <Button variant="dark" size="lg">View Expense</Button>
        <Button variant="outline-secondary" size="lg">Date</Button>
      </>
    )
  };

  //return the respective layout
  //tell typescript we know there will always be a path
  return buttonRoute[location.pathname as keyof typeof buttonRoute] || null;
}
