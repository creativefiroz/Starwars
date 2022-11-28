import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  SimpleGrid,
  Container,
  ListItem,
  List,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function PeopleDesc() {
  const { id } = useParams();
  const [people, setPeople] = useState();

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/" + id);

      let data = await res.json();
      setPeople(data);
    }

    fetchPeople();
  }, []);
  console.log(people);
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={3} spacing={30}>
        <Card>
          <CardBody>
            <List>
              <ListItem> Name:-{people?.name}</ListItem>
              <ListItem>Height:- {people?.height}cm</ListItem>
              <ListItem> Mass:-{people?.mass}pound</ListItem>
              <ListItem> Hair:-{people?.hair_color} </ListItem>
              <ListItem> Skin:-{people?.skin_color}</ListItem>
            </List>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
