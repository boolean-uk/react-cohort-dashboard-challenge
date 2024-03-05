import {
  AppShell,
  Group,
  Burger,
  Image,
  Button,
  Avatar,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { userState, isLoggedInState } from "../State/auth.state";
import { useAtom } from "jotai";
import { LoginModal } from "./Login/LoginModal";
import { IconLogin } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function Header({ opened, toggle }) {
  const [user] = useAtom(userState);
  const [isLoggedIn] = useAtom(isLoggedInState);
  const [openedModal, { open, close }] = useDisclosure(false);
  return (
    <AppShell.Header>
      <Modal opened={openedModal} onClose={close} title="Log In" centered>
        <LoginModal close={close} />
      </Modal>

      <Group h="100%" justify="space-between" px="md">
        <Group align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image alt="Cohort Manager" />
        </Group>
        <Group align="left" justify="flex-end">
          {isLoggedIn ? (
            <Link to={`/profile/${user.id}`}>
              <Avatar src={user.profileImage} alt="Profile" />
            </Link>
          ) : (
            <Button onClick={open}>
              <IconLogin /> Login
            </Button>
          )}
        </Group>
      </Group>
    </AppShell.Header>
  );
}

Header.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
