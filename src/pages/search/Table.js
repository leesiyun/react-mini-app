import styled from "styled-components";

const Table = ({ data }) => (
  <TableStyle>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
      </tr>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </tbody>
  </TableStyle>
);

export default Table;

const TableStyle = styled.table`
  margin-top: 50px;
  border-spacing: 18px;
  color: #444;
  font-size: 18px;
  th {
    text-align: left;
    min-width: 250px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 20px;
    border-spacing: 5px;
    th {
      min-width: 95px;
    }
    th:first-child {
      min-width: 75px;
    }
  }
`;
