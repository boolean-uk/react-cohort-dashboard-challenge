import { Avatar, Group, Text, Card, Space } from "@mantine/core";
import { CommentList } from "./Comments/CommentList";
import { getContactById } from "../../Helpers/APIManager";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function Post({ post }) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    getContactById(post.contactId).then((data) => {
      setContact(data);
    });
  }, []);

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="flex-start">
          <Link to={`/profile/${contact.id}`}>
            <Avatar src={contact.profileImage} radius="xl" />
          </Link>
          <div>
            <Link to={`/profile/${contact.id}`}>
              <Text size="sm" fw={700} ta={"left"}>
                {contact.firstName} {contact.lastName}
              </Text>
            </Link>
            <Text size="xs" c="dimmed">
              {post.title}
            </Text>
          </div>
        </Group>
        <Text pl={54} pt="sm" size="sm" ta={"left"}>
          {post.content}
        </Text>
        <Space h={10} />
        <CommentList postId={post.id} />
      </Card>
      <Space h={10} />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
