import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { Header } from "./Components/Header";
import { AppShell } from "@mantine/core";
import { SideBar } from "./Components/Sidebar";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <Header opened={opened} toggle={toggle} />
        <SideBar />
        <AppShell.Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default App;
