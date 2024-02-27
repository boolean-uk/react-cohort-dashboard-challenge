import Content from "../components/Content";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Root() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Content />
    </QueryClientProvider>
  );
}
