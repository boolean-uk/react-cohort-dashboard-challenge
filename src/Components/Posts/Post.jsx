import { Avatar, Group, Text, Card, Space } from "@mantine/core";
import { AddComment } from "./Comments/AddComment";
import { CommentList } from "./Comments/CommentList";

export function Post() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="left">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="André Sturesson"
          radius="xl"
        />
        <div>
          <Text size="sm" fw={700} ta={"left"}>
            André Sturesson
          </Text>
          <Text size="xs" c="dimmed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur repellendus.
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm" ta={"left"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, maxime
        nesciunt consectetur consequatur necessitatibus adipisci possimus
        repudiandae cum, dolorem laboriosam voluptatem molestiae, minus impedit
        atque non delectus fuga eos deleniti!
      </Text>
      <Space h={10} />
      <CommentList />
      <AddComment />
    </Card>
  );
}
