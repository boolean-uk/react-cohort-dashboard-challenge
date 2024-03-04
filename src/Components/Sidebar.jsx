import { Text, ActionIcon, Group, AppShell } from "@mantine/core";
import { IconHome, IconUserCircle } from "@tabler/icons-react";

export function SideBar() {
  return (
    <AppShell.Navbar p="md">
      <Group direction="column" spacing="xs" align="center">
        <ActionIcon variant="transparent" size="lg">
          <IconHome />
        </ActionIcon>
        <Text size="sm">Home</Text>
      </Group>
      <Group direction="column" spacing="xs" align="center">
        <ActionIcon variant="transparent" size="lg">
          <IconUserCircle />
        </ActionIcon>
        <Text size="sm">Profile</Text>
      </Group>
    </AppShell.Navbar>
  );
}
