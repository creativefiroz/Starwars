import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Card,
  CardBody,
  SimpleGrid,
  Container,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [searchParams] = useSearchParams({});

  const search = searchParams.get("search");

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch(
        "https://swapi.dev/api/planets/" + (search ? `?search=${search}` : "")
      );
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPlanets();
  }, []);
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={3} spacing={30}>
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
