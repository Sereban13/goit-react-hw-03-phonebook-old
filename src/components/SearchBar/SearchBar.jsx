import { SearchBlock, Input } from './SearchBar.styled';

export const SearchBar = ({ filterName, onChangeName }) => {
  return (
    <SearchBlock>
      <label htmlFor="searchFilter">Find your contact</label>
      <Input
        name="filter"
        id="searchFilter"
        type="text"
        value={filterName}
        onChange={event => onChangeName(event.target.value)}
      />
    </SearchBlock>
  );
};
