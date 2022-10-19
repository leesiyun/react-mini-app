import { useState } from "react";
import { Users } from "./users";
import Table from "./Table";
import styled from "styled-components";

const Search = () => {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  const search = (data) =>
    data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );

  const searchQuery = (e) => setQuery(e.target.value.toLowerCase());

  return (
    <SearchStyle>
      <div>
        <input type="text" placeholder="Search..." onChange={searchQuery} />
      </div>
      <Table data={search(Users)} />
    </SearchStyle>
  );
};

export default Search;

const SearchStyle = styled.div`
  height: 90vh;
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  left: 20%;
  div {
    margin-top: 200px;
    position: relative;
    left: 10%;
  }
  input {
    padding: 10px 40px 10px 25px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    left: 8%;
    input {
      padding: 8px 40px 8px 25px;
      font-size: 16px;
    }
  }
`;
