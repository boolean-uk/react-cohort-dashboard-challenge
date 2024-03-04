import { Avatar, TextInput, ActionIcon, rem } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
export function AddComment() {
  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Post Comment"
      rightSectionWidth={42}
      leftSection={<Avatar src={null} alt="no image here" />}
      rightSection={
        <ActionIcon size={32} radius="xl" variant="filled">
          <IconArrowRight
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
      }
    />
  );
}
