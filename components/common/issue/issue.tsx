"use client";
import { Center, Text, Container } from "@mantine/core";
import Link from "next/link";

export default function Issue() {
  return (
    <Center w="100%" h="100%">
      <Container size="xs" style={{ textAlign: "center" }}>
        <Text>
          Oooh boy 🥲😓, You caught us 🤡🙌, you know what our API is not
          responding as we expected...
          <br />
          so we are working on it, please try again later.
          <br />
          You can create an issue on{" "}
          <Link href={"https://github.com/Mirzohid22/pointhub"}>github</Link> we
          appreciate your help. 🙏
        </Text>
      </Container>
    </Center>
  );
}
