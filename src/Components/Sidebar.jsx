import { ActionIcon, Group, AppShell, Text } from "@mantine/core";
import { IconHome, IconUserCircle } from "@tabler/icons-react";
import { userState, isLoggedInState } from "../State/auth.state";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

export function SideBar() {
  const [isLoggedIn] = useAtom(isLoggedInState);
  const [user] = useAtom(userState);
  return (
    <AppShell.Navbar p="md">
      <Group direction="column" spacing="xs" align="center">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <ActionIcon variant="transparent" size="lg">
            <IconHome />
          </ActionIcon>
          <Text>Home</Text>
        </Link>
      </Group>
      <Group direction="column" spacing="xs" align="center">
        {isLoggedIn ? (
          <>
            <ActionIcon variant="transparent" size="lg">
              <IconUserCircle />
            </ActionIcon>
            <Link to={`/profile/${user.id}`} style={{ textDecoration: "none" }}>
              <Text>Profile</Text>
            </Link>
          </>
        ) : (
          <></>
        )}
      </Group>
    </AppShell.Navbar>
  );
}
