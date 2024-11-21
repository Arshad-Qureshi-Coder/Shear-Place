import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './NewPlace.css';

const Dummy_Place = [
  {
    id: 'p1',
    title: 'Taj Mahal',
    description: 'An iconic symbol of love, the Taj Mahal is a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.',
    imageUrl: 'https://t4.ftcdn.net/jpg/00/42/94/25/360_F_42942571_jCbPTe5vFNseRNVKKFFDoCtgsdO5s9SS.jpg',
    address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India',
    location: {
      lat: 27.1751,
      lng: 78.0421
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Gateway of India',
    description: 'The Gateway of India is a historic monument in Mumbai, built during the 20th century to commemorate the visit of King George V and Queen Mary to India.',
    imageUrl: 'https://t3.ftcdn.net/jpg/09/69/06/24/360_F_969062404_GOWal3NgL8CwW5YbMzEbJ8zHTfLO1L0m.jpg',
    address: 'Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India',
    location: {
      lat: 18.9220,
      lng: 72.8347
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'Mysore Palace',
    description: 'Mysore Palace is a historical palace and a royal residence in Mysore, Karnataka. It is one of the most visited tourist attractions in India.',
    imageUrl: 'https://www.culturalindia.net/iliimages/Mysore-Palace-2.jpg',
    address: 'Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru, Karnataka 570001, India',
    location: {
      lat: 12.3051,
      lng: 76.6552
    },
    creator: 'u3'
  }
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedPlace = Dummy_Place.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
