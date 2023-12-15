"use client";

import { Booking, Experience } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { RadioButton } from "./theme/components/molecules/RadioButton";
import { Checkbox } from "./theme/components/molecules/CheckBox";
import { InputBox } from "./theme/components/molecules/InputBox";
import Button from "./theme/components/atoms/Button";
import styled from "styled-components";
import { Text } from "./theme/components/atoms/Text";
import { DynamicTextArea } from "./theme/components/molecules/DynamicTextArea";
import Spacer from "./theme/components/atoms/Spacer";
import { RangeSlider } from "./theme/components/molecules/RangeSlider";
import { DynamicSelect } from "./theme/components/atoms/Select";

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

  const checkboxOptions = [
    { label: "Option 1", checked: false },
    { label: "Option 2", checked: false },
    { label: "Option 3", checked: false },
  ];

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

  const [selectedProductID, setSelectedProductID] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (label: string, checked: boolean) => {
    if (checked) {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, label]);
    } else {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((item) => item !== label)
      );
    }
  };

  const [isSelected, setIsSelected] = useState<string | null>(null);
  // const [isChecked, setIsChecked] = useState(false);
  const [input, setInput] = useState("");
  const [textValue, setTextValue] = useState("");
  const [startValue, setStartValue] = useState<number>(25);

  const handleSliderChange = (start: number) => {
    setStartValue(start);
  };
  const handleRadioChange = (value: string | null) => {
    setIsSelected(value);
  };

  const handleTextChange = (value: string) => {
    setTextValue(value);
  };

  // const handleCheckboxChange = (checked: boolean) => {
  //   setIsChecked(checked);
  // };

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
      {/* <div>
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
      </div> */}
      <StyledContainer>
        <Text white bold huge uppercase>
          Radio Buttons
        </Text>
        <RadioButton
          label={"Option 1"}
          value={isSelected}
          onChange={() => {
            handleRadioChange("Option 1");
          }}
        />
        <RadioButton
          label="Option 2"
          value={isSelected}
          onChange={() => {
            handleRadioChange("Option 2");
          }}
        />
        <RadioButton
          label="Option 3"
          value={isSelected}
          onChange={() => {
            handleRadioChange("Option 3");
          }}
        />
      </StyledContainer>
      <StyledContainer>
        <Text huge bold red uppercase>
          CheckBox Group
        </Text>
        {items.map((item) => (
          <React.Fragment key={item.value}>
            <Checkbox
              label={item.label}
              checked={selectedCheckboxes.includes(item.label)}
              onChange={(checked) => handleCheckboxChange(item.label, checked)}
            />
          </React.Fragment>
        ))}
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
