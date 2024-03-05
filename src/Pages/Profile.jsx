import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "../Helpers/APIManager";
import { Card, Image, Text, Badge, Table, Button, Space } from "@mantine/core";
import { isLoggedInState, userState } from "../State/auth.state";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const [isLoggedIn, setLoggedIn] = useAtom(isLoggedInState);
  const [user, setUser] = useAtom(userState);
  const { contactId } = useParams();
  const [contact, setContact] = useState({});

  const navigate = useNavigate();

  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  useEffect(() => {
    getContactById(contactId).then((data) => {
      setContact(data);
    });
  }, [contactId]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    setUser({});
    navigate("/");
  };

  return (
    <Card withBorder radius="md">
      <Card.Section>
        <a {...linkProps}>
          <Image src={contact.profileImage} />
        </a>
      </Card.Section>

      <Badge color={contact.favouriteColour}>{contact.jobTitle}</Badge>

      <Text fw={500} component="a" {...linkProps}>
        {contact.firstName} {contact.lastName}
      </Text>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Street</Table.Th>
            <Table.Th>City</Table.Th>
            <Table.Th>Gender</Table.Th>
            <Table.Th>Longitude</Table.Th>
            <Table.Th>Latitude</Table.Th>
            <Table.Th>Email</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr style={{ textAlign: "left" }}>
            <Table.Td>{contact.street}</Table.Td>
            <Table.Td>{contact.city}</Table.Td>
            <Table.Td>{contact.gender}</Table.Td>
            <Table.Td>{contact.longitude}</Table.Td>
            <Table.Td>{contact.latitude}</Table.Td>
            <Table.Td>{contact.email}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      {isLoggedIn && user.id.toString() === contactId.toString() && (
        <>
          <Space h={10} />
          <Button variant="default" onClick={handleLogout}>
            Logout
          </Button>
        </>
      )}
    </Card>
  );
}
