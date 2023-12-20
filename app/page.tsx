import { Center, Blockquote } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Center h={100}>
        <Blockquote cite="chatGPT" color="blue">
          PointHub - where every point matters and every goal counts!
        </Blockquote>
      </Center>
    </main>
  );
}
