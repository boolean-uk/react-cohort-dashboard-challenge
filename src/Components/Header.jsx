import { AppShell, Group, Burger, Image, Button, Avatar } from "@mantine/core";
export function Header({ opened, toggle }) {
  return (
    <AppShell.Header>
      <Group h="100%" justify="space-between" px="md">
        <Group align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image alt="Cohort Manager" />
        </Group>
        <Group align="left" justify="flex-end">
          <Avatar src={null} alt="Profile" />
        </Group>
      </Group>
    </AppShell.Header>
  );
}
