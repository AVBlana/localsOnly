"use client";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Booking, Experience } from "@/gql/graphql";
import styled from "styled-components";
import { Text } from "./theme/components/atoms/Text";
import { RadioButton } from "./theme/components/molecules/RadioButton";
import { Checkbox } from "./theme/components/molecules/CheckBox";
import { InputBox } from "./theme/components/molecules/InputBox";
import Button from "./theme/components/atoms/Button";
import { DynamicTextArea } from "./theme/components/molecules/DynamicTextArea";
import Spacer from "./theme/components/atoms/Spacer";
import { RangeSlider } from "./theme/components/molecules/RangeSlider";
import { DynamicSelect } from "./theme/components/atoms/Select";
import Tabs from "./theme/components/molecules/Tabs";
import Tab from "./theme/components/atoms/Tab";
import Accordion from "./theme/components/molecules/Accordion";
import { CloseIcon, MenuIcon, UserIcon } from "./theme/components";

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

  const [selectedProductID, setSelectedProductID] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [input, setInput] = useState("");
  const [textValue, setTextValue] = useState("");
  const [startValue, setStartValue] = useState<number>(25);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  interface Product {
    id: string;
    name: string;
    price: number;
  }

  const products: Product[] = [
    { id: "1", name: "Product 1", price: 10 },
    { id: "2", name: "Product 2", price: 20 },
    { id: "3", name: "Product 3", price: 30 },
    { id: "4", name: "Product 4", price: 40 },
    { id: "5", name: "Product 5", price: 50 },
  ];

  const handleSliderChange = (start: number) => {
    setStartValue(start);
  };

  const handleTextChange = (value: string) => {
    setTextValue(value);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Add your button click logic here
  };

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
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
        <Text white bold huge uppercase>
          Radio Buttons
        </Text>
        <RadioButton
          label="Male"
          value="male"
          isSelected={selectedOption === "male"}
          onChange={handleRadioChange}
          groupName="gender"
        />
        <RadioButton
          label="Female"
          value="female"
          isSelected={selectedOption === "female"}
          onChange={handleRadioChange}
          groupName="gender"
        />
        <RadioButton
          label="Other"
          value="other"
          isSelected={selectedOption === "other"}
          onChange={handleRadioChange}
          groupName="gender"
        />
      </StyledContainer>

      <StyledContainer>
        <Text huge bold red uppercase>
          CheckBox Group
        </Text>
        <Checkbox
          label="Option 1"
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
        <Checkbox
          label="Option 2"
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
        <Checkbox
          label="Option 3"
          selectedCheckboxes={selectedCheckboxes}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
        <Text white bigger bold>
          {selectedCheckboxes.length > 0
            ? `Selected Checkboxes: ${selectedCheckboxes.join(", ")}`
            : "No checkboxes selected"}
        </Text>
      </StyledContainer>

      <StyledContainer>
        <Text white bold huge uppercase>
          Inputbox
        </Text>
        <InputBox
          type="text"
          label="Label"
          value={input}
          onChange={handleInputChange}
        />
        <p>Label: {input}</p>
      </StyledContainer>

      <StyledContainer style={{ display: "flex", gap: 10 }}>
        <Text white bold huge uppercase>
          Buttons
        </Text>
        <Button label="Click me" onClick={handleClick} />
        <Button label="Disabled Button" onClick={handleClick} disabled />
        <Button label="Loading Button" onClick={handleClick} loading />
        <Button
          label="Styled Button"
          onClick={handleClick}
          style={{ backgroundColor: "green", color: "white", padding: 5 }}
        />
      </StyledContainer>

      <StyledContainer>
        <Text white bold huge uppercase>
          Dynamic TextArea
        </Text>
        <DynamicTextArea
          placeholder="Your Placeholder"
          value={textValue}
          onChange={handleTextChange}
        />
      </StyledContainer>

      <StyledContainer>
        <Spacer huge />
        <Text white bold huge uppercase>
          Spacer
        </Text>
        <Spacer biggest />
        <Spacer hasLine />
        <Spacer medium />
      </StyledContainer>

      <StyledContainer style={{ display: "flex", flexDirection: "column" }}>
        <Text huge uppercase bold white>
          Range Value: {startValue}
        </Text>
        <RangeSlider
          min={0}
          max={100}
          step={1}
          startValue={startValue}
          onChange={handleSliderChange}
        />
      </StyledContainer>

      <StyledContainer>
        <DynamicSelect
          label="Products"
          items={products}
          value={selectedProductID}
          labelExtractor={({ name }) => name}
          valueExtractor={({ id }) => id}
          onValueChange={(value, selectedValue) => {
            setSelectedProductID(value);
            setSelectedProduct(selectedValue);
          }}
        />
        <Text white bold big>
          Selected item: {JSON.stringify(selectedProduct, null, 2)}
        </Text>
      </StyledContainer>

      <StyledContainer>
        <Text white bold huge uppercase>
          Tabs Component
        </Text>
        <Tabs>
          <Tab title="Lemon">Lemon is yellow</Tab>
          <Tab title="Strawberry">Strawberry is red</Tab>
          <Tab title="Pear">Pear is green</Tab>
        </Tabs>
      </StyledContainer>

      <StyledContainer>
        <Text white bold huge uppercase>
          Accordion Component
        </Text>
        <Accordion title="Section 1">
          <p>Content for section 1</p>
        </Accordion>
        <Accordion title="Section 2">
          <p>Content for section 2</p>
        </Accordion>
      </StyledContainer>

      <StyledContainer>
        <Text white bold huge uppercase>
          Icon Button Component
        </Text>
        <div style={{ display: "flex", gap: 20 }}>
          <UserIcon size={24} />
          <MenuIcon size={48} />
          <CloseIcon size={96} />
        </div>
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
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  gap: 10px;
`;

export default Home;
