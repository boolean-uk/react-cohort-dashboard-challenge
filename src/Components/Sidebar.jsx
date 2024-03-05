import { ActionIcon, Group, AppShell, Modal, Button } from "@mantine/core";
import { IconHome, IconUserCircle } from "@tabler/icons-react";
import { userState, isLoggedInState } from "../State/auth.state";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { LoginModal } from "./Login/LoginModal";
import { IconLogin } from "@tabler/icons-react";

export function SideBar() {
  const [isLoggedIn] = useAtom(isLoggedInState);
  const [user] = useAtom(userState);
  const [openedModal, { close }] = useDisclosure(false);
  return (
    <AppShell.Navbar p="md">
      <Modal opened={openedModal} onClose={close} title="Log In" centered>
        <LoginModal />
      </Modal>

      <Group direction="column" spacing="xs" align="center">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <ActionIcon variant="transparent" size="lg">
            <IconHome />
          </ActionIcon>
          Home
        </Link>
      </Group>
      <Group direction="column" spacing="xs" align="center">
        <ActionIcon variant="transparent" size="lg">
          <IconUserCircle />
        </ActionIcon>
        {isLoggedIn ? (
          <Link to={`/profile/${user.id}`} style={{ textDecoration: "none" }}>
            Profile
          </Link>
        ) : (
          <Button onClick={open} variant="link">
            <IconLogin /> Login
          </Button>
        )}
      </Group>
    </AppShell.Navbar>
  );
}
