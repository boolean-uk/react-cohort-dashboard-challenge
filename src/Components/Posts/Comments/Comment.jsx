import { Avatar, Group, Text, Container, Space, Card } from "@mantine/core";

export function Comment() {
  return (
    <Container size="sm" ml={0}>
      <Group position="left">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="André Sturesson"
          radius="xl"
        />
        <div>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="xs" fw={700} ta={"left"}>
              André Sturesson
            </Text>
            <Text size="sm" c="dimmed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur repellendus.
            </Text>
          </Card>
        </div>
      </Group>
      <Space h={10} />
    </Container>
  );
}
