import {  Stack } from "react-bootstrap";
import { RouteButton } from "../common/RouteButton";
import { StyledDiv } from "../StyledComponents/StyledDiv";

export function AddExpense() {
  return (
      <StyledDiv className="d-grid gap-2">
        <Stack>
          <h1>Expenses At A Glance</h1>
          <p>Placeholder</p>
        </Stack>

        <RouteButton />
      </StyledDiv>
  );
}
