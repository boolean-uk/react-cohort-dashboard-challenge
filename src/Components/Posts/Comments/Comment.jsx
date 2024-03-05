import { Avatar, Group, Text, Container, Space, Card } from "@mantine/core";
import PropTypes from "prop-types";

export function Comment({ comment }) {
  return (
    <Container size="sm" ml={0}>
      <Group position="left">
        <Avatar
          src={comment.contact.profileImage}
          alt={`${comment.contact.firstName} ${comment.contact.lastName}`}
          radius="xl"
        />
        <div>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="xs" fw={700} ta={"left"}>
              {comment.contact.firstName} {comment.contact.lastName}
            </Text>
            <Text size="sm" c="dimmed">
              {comment.content}
            </Text>
          </Card>
        </div>
      </Group>
      <Space h={10} />
    </Container>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
