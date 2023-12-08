"use client";

import {
  Experience,
  ExperienceCreateInput,
  ExperienceWhereUniqueInput,
} from "@/gql/graphql";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  ChangeEventHandler,
  FormEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from "react";

const Admin = () => {
  const {
    loading,
    error,
    data,
    refetch: refetchExperiences,
  } = useQuery(GET_EXPERIENCES);
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;

  const onDelete = async (id: string) => {
    try {
      const where: ExperienceWhereUniqueInput = {
        id,
      };

      await deleteExperience({
        variables: {
          where,
        },
      });
      refetchExperiences();
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div>
      Admin
      <div>
        {data?.experiences?.map((item: Experience, index: number) => (
          <div key={`experience-${index}`}>
            <h3>{item.name}</h3>
            <h3>{item.latitude}</h3>
            <h3>{item.longitude}</h3>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <AddExperience />
    </div>
  );
};

export default Admin;

const AddExperience = () => {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [addExperience, { loading, error, data }] = useMutation(ADD_EXPERIENCE);

  const [errors, setErrors] = useState<string[]>([]);
  const onChangeName = (value: string) => {
    setName(value);
  };
  const onChangeLatitude = (value: string) => {
    setLatitude(value);
  };
  const onChangeLongitude = (value: string) => {
    setLongitude(value);
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setErrors([]);
    try {
      let newErrors: string[] = [];

      if (!name.length) {
        newErrors = [...newErrors, "Name is not defined"];
      }
      if (!latitude) {
        newErrors = [...newErrors, "Latitude is not defined"];
      }
      if (!longitude) {
        newErrors = [...newErrors, "Longitude is not defined"];
      }

      if (newErrors.length) {
        setErrors(newErrors);
        return;
      }

      if (name && longitude && latitude) {
        const data: ExperienceCreateInput = {
          name,
          longitude: Number(longitude),
          latitude: Number(latitude),
        };

        await addExperience({
          variables: {
            data,
          },
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      Create experience
      <div>
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", gap: 20, flexDirection: "column" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Input label="Name:" value={name} onChange={onChangeName} />
            <Input
              label="Latitude:"
              type="number"
              value={latitude}
              onChange={onChangeLatitude}
            />
            <Input
              label="Longitude:"
              type="number"
              value={longitude}
              onChange={onChangeLongitude}
            />
          </div>
          <div>{loading ? "loading..." : <button>Submit</button>}</div>
          {data?.createOneExperience ? (
            <div>
              {data?.createOneExperience?.id}
              {data?.createOneExperience?.name}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              color: "red",
              fontSize: 10,
            }}
          >
            {errors.length
              ? errors.map((error) => {
                  return <div>{error}</div>;
                })
              : null}
            {error ? <div>{error.message}</div> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

const Input = ({
  value,
  label,
  type = "text",
  onChange,
}: {
  value: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
}) => {
  const onChangeEvent: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.currentTarget.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <label style={{ fontSize: 12 }}>{label}</label>
      <input
        type={type}
        value={value as string | number | undefined}
        onChange={onChangeEvent}
      />
    </div>
  );
};

const GET_EXPERIENCES = gql`
  query getExperiences {
    experiences {
      id
      name
      latitude
      longitude
    }
  }
`;

const ADD_EXPERIENCE = gql`
  mutation CreateOneExperience($data: ExperienceCreateInput!) {
    createOneExperience(data: $data) {
      id
    }
  }
`;

const DELETE_EXPERIENCE = gql`
  mutation DeleteOneExperience($where: ExperienceWhereUniqueInput!) {
    deleteOneExperience(where: $where) {
      id
    }
  }
`;
