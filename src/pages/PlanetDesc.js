import React, { useState, useEffect } from "react";
import {
  Card,
  List,
  CardBody,
  SimpleGrid,
  Container,
  ListItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function PlanetDesc() {
  const { id } = useParams();
  const [planet, setPlanet] = useState();

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/" + id);
      let data = await res.json();
      setPlanet(data);
    }

    fetchPlanets();
  }, [id]);

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={3} spacing={30}>
        <Card>
          <CardBody>
            <List>
              <ListItem>Name:-{planet?.name}</ListItem>
              <ListItem>Population:- {planet?.population}</ListItem>
              <ListItem> Climate:-{planet?.climate}</ListItem>
              <ListItem> Terrain:-{planet?.terrain}</ListItem>
              <ListItem> Diameter:-{planet?.diameter}</ListItem>
            </List>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
