"use client";

import { Booking, Experience } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { RadioGroup } from "./theme/RadioButton";
import { CheckboxGroup } from "./theme/CheckBox";
import { InputBox } from "./theme/InputBox";
import Button from "./theme/Button";
import styled from "styled-components";
import { Text } from "./theme/Text";

const Home = () => {
  const {
    loading: loadingExperiences,
    error: errorExperiences,
    data: dataExperiences,
  } = useQuery(GET_EXPERIENCES);
  const {
    loading: loadingBookings,
    error: errorBookings,
    data: dataBookings,
  } = useQuery(GET_BOOKINGS);

  const items: { value: string; label: string }[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const [value, setValue] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (values: string[]) => {
    setCheckedItems(values);
  };

  const [input, setInput] = useState("");

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  if (loadingExperiences && loadingBookings) return <p>Loading...</p>;
  if (errorExperiences && errorBookings)
    return <p>Error : {errorExperiences?.message || errorBookings?.message}</p>;

  return (
    <div>
      <div>
        {dataExperiences?.experiences?.map(
          (item: Experience, index: number) => (
            <div key={`experience-${index}`}>
              <h3>{item.name}</h3>
            </div>
          )
        )}
      </div>
      <div>
        {dataBookings?.bookings?.map((item: Booking, index: number) => (
          <div key={`booking-${index}`}>
            <h3>{item.id}</h3>
          </div>
        ))}
      </div>
      <StyledContainer>
        <h1>RadioButton Group</h1>
        <RadioGroup
          name="gender"
          items={items}
          value={value}
          onChange={setValue}
        />
      </StyledContainer>
      <StyledContainer>
        <Text huge red uppercase>
          CheckBox Group
        </Text>
        <CheckboxGroup
          name="gender"
          items={items}
          checkedItems={checkedItems}
          onChange={handleCheckboxChange}
        />
        <p>Checked items: {checkedItems.join(", ")}</p>
      </StyledContainer>
      <StyledContainer>
        <h1>InputBox</h1>
        <InputBox
          type="text"
          label="Label"
          value={input}
          onChange={handleInputChange}
        />
        <p>Label: {input}</p>
      </StyledContainer>
      <StyledContainer style={{ display: "flex", gap: 10 }}>
        <h1>Buttons</h1>
        <Button label="Click me" onClick={handleClick} />
        <br />
        <Button label="Disabled Button" onClick={handleClick} disabled />
        <br />
        <Button label="Loading Button" onClick={handleClick} loading />
        <br />
        <Button
          label="Styled Button"
          onClick={handleClick}
          style={{ backgroundColor: "green", color: "white", padding: 5 }}
        />
      </StyledContainer>
    </div>
  );
};

const GET_EXPERIENCES = gql`
  query getExperiences {
    experiences {
      name
      latitude
      longitude
    }
  }
`;

const GET_BOOKINGS = gql`
  query getBookings {
    bookings {
      id
    }
  }
`;

const StyledContainer = styled.div`
  padding-top: 2rem;
`;

export default Home;
