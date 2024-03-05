import { useState } from "react";
import { Card } from "@mantine/core";
import { userState, isLoggedInState } from "../../State/auth.state";
import { useAtom } from "jotai";
import { postState } from "../../State/posts.state";
import { createPost } from "../../Helpers/APIManager";
import { useDisclosure } from "@mantine/hooks";
import { ExpandableForm } from "../ExpandableForm";

export function AddPost() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [opened, { toggle }] = useDisclosure(false);
  const [user] = useAtom(userState);
  const [isLoggedIn] = useAtom(isLoggedInState);
  const [posts, setPosts] = useAtom(postState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value === "") return;
    if (opened && title === "") return;
    const data = await createPost({
      title: title,
      content: value,
      contactId: user.id,
    });
    setPosts([...posts, data]);
    setValue("");
    setTitle("");
    toggle();
  };

  return (
    <>
      {isLoggedIn && (
        <>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <ExpandableForm
              handleSubmit={handleSubmit}
              opened={opened}
              toggle={toggle}
            />
          </Card>
        </>
      )}
    </>
  );
}
