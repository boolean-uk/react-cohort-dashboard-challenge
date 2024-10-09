import { useContext } from "react";
import { AppContext } from "../App";
import { AppBar, Avatar, Container, Stack, Box } from "@mui/material";
import "../App.css";
import TitleHeader from "../assets/title-header.svg";

function Header() {
  const context = useContext(AppContext);

  const randomLoggedIn = context.contacts?.find((y) => y.id == 1);

  const loggedInInitials =
    randomLoggedIn?.firstName.charAt(0) + randomLoggedIn?.lastName.charAt(0);

  return (
    <AppBar position="static">
      <Container className="header">
        <Stack spacing={48} direction="row" sx={{ alignItems: "center" }}>
          
          <img src={TitleHeader} className="title-header" alt="title header" />
          
          <Avatar
            sx={{
              backgroundColor: "#64dc78",
              color: "#000046",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {loggedInInitials}
          </Avatar>
          
          
        </Stack>
      </Container>
    </AppBar>
  );
}

export default Header;
