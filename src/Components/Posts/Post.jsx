import { Avatar, Group, Text, Card, Space } from "@mantine/core";
import { AddComment } from "./Comments/AddComment";
import { CommentList } from "./Comments/CommentList";
import { getContactById } from "../../Helpers/APIManager";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function Post({ post }) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    getContactById(post.contactId).then((data) => {
      console.log(data);
      setContact(data);
    });
  }, []);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="left">
        <Link to={`/profile/${contact.id}`}>
          <Avatar
            src={contact.profileImage}
            alt="{contact.firstName} {contact.lastName}"
            radius="xl"
          />
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
      <AddComment postId={post.id} />
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
