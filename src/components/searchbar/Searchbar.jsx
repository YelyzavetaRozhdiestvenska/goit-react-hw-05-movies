import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './searchbar.styled';

export const Searchbar = ({ onSubmit, query }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      toast.error('Input search movie!');
      return;
    }
    onSubmit(evt.target.elements.query.value);
    evt.target.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FcSearch size={24} />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>

        <Input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </SearchForm>
    </>
  );
};
