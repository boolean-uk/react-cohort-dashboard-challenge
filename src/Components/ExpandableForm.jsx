import { useState } from "react";
import {
  TextInput,
  rem,
  Avatar,
  ActionIcon,
  Container,
  Collapse,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import PropTypes from "prop-types";
import { userState } from "../State/auth.state";
import { useAtom } from "jotai";

export function ExpandableForm({
  handleSubmit,
  opened,
  toggle,
  value,
  setValue,
  title,
  setTitle,
}) {
  const [user] = useAtom(userState);

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        radius="xl"
        size="md"
        onClick={toggle}
        placeholder={opened ? "Title" : "What's on your mind?"}
        rightSectionWidth={42}
        leftSection={<Avatar src={user.profileImage} alt="Profile Image" />}
        rightSection={
          <ActionIcon size={32} radius="xl" variant="filled" type="submit">
            <IconArrowRight
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        }
      />
      <Collapse in={opened}>
        <Container padding="md">
          <TextInput
            value={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
            radius="xl"
            size="md"
            mt={10}
            placeholder="Content"
            mb={10}
          />
        </Container>
      </Collapse>
    </form>
  );
}

ExpandableForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};
