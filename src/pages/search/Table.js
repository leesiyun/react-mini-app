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
  margin-top: 60px;
  width: 100%;
  border-spacing: 0;
  border: 1px solid #dddddd;
  font-size: 18px;
  table-layout: fixed;

  tr {
    &:nth-child(even) {
      background-color: #f1f1f1;
    }
  }

  th {
    text-align: left;
    border-bottom: 1px solid #dddddd;
    padding: 20px 20px 20px 45px;
  }

  td {
    border-bottom: 1px solid #dddddd;
    padding: 20px 0 20px 40px;
  }
`;
