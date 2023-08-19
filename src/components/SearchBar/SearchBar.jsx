export const SearchBar = ({ filterName, onChangeName }) => {
  return (
    <input
      type="text"
      value={filterName}
      onChange={event => onChangeName(event.target.value)}
    />
  );
};
