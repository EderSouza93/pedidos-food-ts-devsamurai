import React from "react";

import { Sidebar } from "../../components/Sidebar/index.tsx";

import { Container } from "./styles.ts";

export default function Main() {
  return <Container>
    <Sidebar />

    <h1>Main</h1>
  </Container>
}
