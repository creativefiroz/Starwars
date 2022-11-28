import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  SimpleGrid,
  Container,
  ListItem,
  List,
} from "@chakra-ui/react";
import { useSearchParams, Link } from "react-router-dom";

export default function All() {
  const [peoples, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
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
    async function fetchPlanets() {
      let res = await fetch(
        "https://swapi.dev/api/planets/" + (search ? `?search=${search}` : "")
      );
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();
  }, [search]);

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={4} spacing={30}>
        {peoples?.map((people, index) => (
          <Link to={"/people/" + (index + 1)} key={index}>
            <Card>
              <CardBody>
                <List>
                  <ListItem>Name:- {people.name}</ListItem>
                  <ListItem>Height:-{people.height}cm</ListItem>
                </List>
              </CardBody>
            </Card>
          </Link>
        ))}
        {planets?.map((planet, index) => (
          <Link to={"/planets/" + (index + 1)} key={index}>
            <Card>
              <CardBody>
                <List>
                  <ListItem>Name:- {planet.name}</ListItem>
                  <ListItem>Climate:-{planet.climate}</ListItem>
                </List>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
}
