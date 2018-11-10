import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import { getUsers } from "../api";

const thead = [
  "Username",
  "Email",
  "Tel",
  "Photo",
  // "ID",
  "FName",
  "LName",
  "Company",
  "Position"
];
const theadFields = [
  "username",
  "email",
  "tel",
  "photoUrl",
  // "id",
  "firstName",
  "lastName",
  "company",
  "position"
];

class UsersTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    getUsers()
      .then(users => this.setState({ users }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Users</CardTitle>
              </CardHeader>
              <CardBody style={{ overflow: "auto", maxHeight: "80vh" }}>
                <Table
                  size="sm"
                  hover
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <thead className="text-danger">
                    <tr>
                      {thead.map(u => (
                        <th key={u}>{u}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map(u => (
                      <tr key={u.id}>
                        {theadFields.map(i => {
                          if (i == "photoUrl") {
                            return (
                              <td key={u[i]}>
                                <img
                                  src={u[i]}
                                  alt="Photo"
                                  width={32}
                                  style={{ borderRadius: "50%" }}
                                />
                              </td>
                            );
                          }
                          return <td key={u[i]}>{u[i]}</td>;
                        })}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UsersTable;
