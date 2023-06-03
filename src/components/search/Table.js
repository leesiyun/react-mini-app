import styled from 'styled-components'

const Table = ({data}) => (
  <TableStyle>
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </tbody>
  </TableStyle>
)

export default Table

const TableStyle = styled.table`
  margin-top: 60px;
  width: 100%;
  border-spacing: 0;
  border: 1px solid #dddddd;
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
    width: 27%;
    font-size: 17px;
    &:nth-child(3) {
      width: 46%;
    }
  }

  td {
    border-bottom: 1px solid #dddddd;
    padding: 20px 0 20px 45px;
  }
  @media (max-width: 768px) {
    margin-top: 35px;
    font-size: 14px;

    th {
      display: none;
    }

    td {
      display: block;
      position: relative;
      border-bottom: 0;
      padding: 8px 0 8px 45px;
      padding-left: 35%;

      &:before {
        width: 50%;
        white-space: nowrap;
        font-weight: bold;
        position: absolute;
        left: 25px;
      }

      &:nth-of-type(1):before {
        content: 'Name';
      }
      &:nth-of-type(2):before {
        content: 'Surname';
      }
      &:nth-of-type(3):before {
        content: 'Email';
      }
      &:nth-child(3n) {
        border-bottom: 1px solid #dddddd;
      }
    }
  }
`
