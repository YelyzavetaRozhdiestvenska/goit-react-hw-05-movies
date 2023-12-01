import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { SearchForm, SearchFormButton, ButtonLabel, Input } from './searchbar.styled';

export const Searchbar = ({ searchMovie }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.value === '') {
      toast.error('Input search movie!');
      return;
    }
    searchMovie(query);
    evt.target.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={handleChange}
        />
        <SearchFormButton type="submit">
          <FcSearch size={24} />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>
      </SearchForm>
    </>
  );
};
