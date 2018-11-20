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
import { getVillages } from "../api";

const thead = ["", "Event", "Head", "Name", "Location"];

class TableVillages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      villages: []
    };

    getVillages()
      .then(villages => this.setState({ villages }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Villages</CardTitle>
              </CardHeader>
              <CardBody style={{ overflow: "auto", maxHeight: "80vh" }}>
                <Table size="sm" hover>
                  <thead className="text-danger">
                    <tr>
                      {thead.map(u => (
                        <th key={u}>{u}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.villages.map(u => (
                      <tr key={u.vid}>
                        <td>
                          {/* <Link to={"/villages/" + u.id}> */}
                          <i className="fa fa-link text-danger" />
                          {/* </Link> */}
                        </td>
                        <td>{u.event.id}</td>
                        <td
                          style={{
                            maxWidth: 300,
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                          }}
                        >
                          {u.village_name}
                        </td>
                        <td
                          style={{
                            maxWidth: 300,
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                          }}
                        >
                          {u.village_head}
                        </td>
                        <td>{u.location}</td>
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

export default TableVillages;
