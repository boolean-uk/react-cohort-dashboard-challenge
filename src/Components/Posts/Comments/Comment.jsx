import {
  Avatar,
  Group,
  Text,
  Container,
  Space,
  Card,
  Loader,
} from "@mantine/core";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getContactById } from "../../../Helpers/APIManager";

export function Comment({ comment }) {
  const [contact, setContact] = useState({});
  console.log("comment", comment);
  useEffect(() => {
    const fetchContact = async () => {
      const data = await getContactById(comment.contactId);
      setContact(data);
    };

    fetchContact();
  }, []);
  console.log("contact", contact);

  return (
    <Container size="sm" ml={0}>
      {contact ? (
        <Group position="left">
          <Avatar
            src={contact.profileImage}
            alt={`${contact.firstName} ${contact.lastName}`}
            radius="xl"
          />
          <div>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text size="xs" fw={700} ta={"left"}>
                {contact.firstName} {contact.lastName}
              </Text>
              <Text size="sm" c="dimmed">
                {comment.content}
              </Text>
            </Card>
          </div>
        </Group>
      ) : (
        <Loader />
      )}
      <Space h={10} />
    </Container>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
