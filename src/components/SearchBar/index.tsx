import React, { useState } from 'react';

import { Wrapper, Search, SubmitButton } from './styles';

type SearchBarProps = {
  onSearch: (search: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(search);
    }
  };

  return (
    <Wrapper>
      <Search
        placeholder="Digite aqui"
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <SubmitButton type="button" onClick={() => onSearch(search)}>
        Pesquisar
      </SubmitButton>
    </Wrapper>
  );
}

export default SearchBar;
