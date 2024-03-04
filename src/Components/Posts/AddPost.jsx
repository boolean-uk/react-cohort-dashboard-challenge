import {
  TextInput,
  rem,
  Avatar,
  ActionIcon,
  Card,
  Container,
  Space,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export function AddPost() {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <TextInput
          radius="xl"
          size="md"
          placeholder="What's on your mind?	"
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
      </Card>
      <Space h={10} />
    </>
  );
}
