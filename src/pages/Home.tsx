import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
    </Layout>
  );
}
