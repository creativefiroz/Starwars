import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Card,
  CardBody,
  SimpleGrid,
  Container,
  ListItem,
  List,
} from "@chakra-ui/react";

export default function People() {
  const [peoples, setPeople] = useState([]);
  const [searchParams] = useSearchParams({});

  const search = searchParams.get("search");

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch(
        "https://swapi.dev/api/people/" + (search ? `?search=${search}` : "")
      );
      let data = await res.json();
      setPeople(data.results);
    }

    fetchPeople();
  }, [search]);

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={3} spacing={30}>
        {peoples?.map((people, index) => (
          <Link to={"/people/" + (index + 1)} key={index}>
            <Card>
              <CardBody>
                <List>
                  <ListItem>Name:-{people.name}</ListItem>
                  <ListItem>Height:-{people.height}cm</ListItem>
                </List>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
}
