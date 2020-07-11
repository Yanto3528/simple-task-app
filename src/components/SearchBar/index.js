import React, { useRef } from "react";
import { connect } from "react-redux";
import { filterTodo, filterByType, clearFilter } from "../../redux/actions";

import { GoSearch } from "react-icons/go";
import { Form, InputGroup, Input, Select } from "../../styles/shared/Form";
import { SearchBarContainer, SearchIcon } from "./styles";

export const SearchBar = ({ filterTodo, clearFilter, filterByType }) => {
  const inputRef = useRef();

  const onChange = (e) => {
    // Cek apakah inputRef ada value atau tidak
    // Jika ada, maka jalankan fungsi filterTodo untuk
    // memfilter todo berdasarkan input
    if (inputRef.current.value !== "") {
      filterTodo(e.target.value);
    } else {
      // Jika tidak maka fungsi clearFilter akan membersihkan
      // semua filtered todo list nya
      clearFilter();
    }
  };

  // Sama dengan fungsi onChange di atas
  // Bedanya ini memakai fungsi filterByType
  const onSelect = (e) => {
    if (e.target.value) {
      filterByType(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <SearchBarContainer>
      <Form>
        <InputGroup style={{ position: "relative" }}>
          <Input
            type="text"
            placeholder="Search todo"
            onChange={onChange}
            ref={inputRef}
          />
          <SearchIcon>
            <GoSearch />
          </SearchIcon>
        </InputGroup>
        <InputGroup>
          <Select onChange={onSelect}>
            <option value="">-Filter-</option>
            <option value="Important">Important</option>
            <option value="Urgent">Urgent</option>
            <option value="Other">Other</option>
            <option value="Completed">Completed</option>
          </Select>
        </InputGroup>
      </Form>
    </SearchBarContainer>
  );
};

export default connect(null, {
  filterTodo,
  clearFilter,
  filterByType,
})(SearchBar);
