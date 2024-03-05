import { Button, Container, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { userState, isLoggedInState } from "../../State/auth.state";
import { useAtom } from "jotai";
import { getContactByEmail } from "../../Helpers/APIManager";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export function LoginModal({ close }) {
  const [user, setUser] = useAtom(userState);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInState);

  const navigate = useNavigate();

  const form = useForm({
    initialValues: { email: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
    validateInputOnChange: true,
  });

  function handleLogin() {
    form.validate();
    console.log(form.values);
    getContactByEmail(form.values.email).then((response) => {
      console.log(response);
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
      setIsLoggedIn(true);
      close();
      navigate(`/profile/${response.id}`);
    });
  }

  return (
    <Container>
      <form onSubmit={form.onSubmit(handleLogin)}>
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <Space h={16} />
        <Button type="submit" disabled={Object.keys(form.errors).length > 1}>
          Login
        </Button>
      </form>
    </Container>
  );
}

LoginModal.propTypes = {
  close: PropTypes.func.isRequired,
};
