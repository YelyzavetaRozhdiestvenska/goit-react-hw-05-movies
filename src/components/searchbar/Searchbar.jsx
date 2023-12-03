import { FcSearch } from 'react-icons/fc';
import { SearchForm, SearchFormButton, ButtonLabel, Input } from './searchbar.styled';

export const Searchbar = ({ handleChange, handleSubmit, query }) => {
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
