import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Input,
  Stack,
} from "@chakra-ui/react";
import { createSearchParams, NavLink, useSearchParams } from "react-router-dom";

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams({});

  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams(createSearchParams({ search: event.target.search.value }));
  }
  console.log(searchParams);
  return (
    <Container maxW="container.xl" mb="8">
      <Flex justifyContent={"space-between"} alignItems="center">
        <ButtonGroup py="4" colorScheme={"blue"}>
          <NavLink to="/">
            {({ isActive }) => <Button isActive={isActive}>All</Button>}
          </NavLink>
          <NavLink to="/people">
            {({ isActive }) => <Button isActive={isActive}>People</Button>}
          </NavLink>
          <NavLink to="/planets">
            {({ isActive }) => <Button isActive={isActive}>Planets</Button>}
          </NavLink>
        </ButtonGroup>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack direction="row">
            <Input placeholder="Search" id="search" name="search" />
            <Button type="submit">Search</Button>
          </Stack>
        </form>
      </Flex>
    </Container>
  );
}
