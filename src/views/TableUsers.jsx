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

import { Link } from "react-router-dom";
import { getUsers } from "../api";

const thead = [
  "",
  "Username",
  "Email",
  "Tel",
  "Photo",
  "Name",
  "Company",
  "Position"
];

class TableUsers extends React.Component {
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
                <Table size="sm" hover>
                  <thead className="text-danger">
                    <tr>
                      {thead.map((u, i) =>
                        i === thead.length - 1 ? (
                          <th key={u} className="text-right">
                            {u}
                          </th>
                        ) : (
                          <th key={u}>{u}</th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody style={{ overflow: "auto" }}>
                    {this.state.users.map(u => (
                      <tr key={u.id}>
                        <td>
                          <Link to={"/users/" + u.username}>
                            <i className="fa fa-link text-danger" />
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={"/users/" + u.username}
                            style={{ color: "#176075" }}
                          >
                            {u.username}
                          </Link>
                        </td>
                        <td>{u.email}</td>
                        <td className="text-right">{u.tel}</td>
                        <td className="text-center">
                          <img
                            src={u.photoUrl}
                            alt="Avatar"
                            width={30}
                            style={{ borderRadius: "50%" }}
                          />
                        </td>
                        <td>
                          {(u.firstName || "") + " " + (u.lastName || "")}
                        </td>
                        <td>{u.company}</td>
                        <td className="text-right">{u.position}</td>
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

export default TableUsers;
