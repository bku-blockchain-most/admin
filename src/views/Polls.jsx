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
import { getPolls } from "../api";
import moment from "moment";

const thead = [
  "Event ID",
  "Owner ID",
  "Title",
  "Start Date",
  "End Date",
  "Contract Address",
  "No.Cand"
];

class PollsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      polls: []
    };

    getPolls()
      .then(polls => this.setState({ polls }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Polls</CardTitle>
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
                    {this.state.polls.map(u => (
                      <tr key={u.id}>
                        <td>{u.eventID}</td>
                        <td>{u.ownerID}</td>
                        <td>{u.title}</td>
                        <td>{moment(u.startDate).calendar()}</td>
                        <td>{moment(u.endDate).calendar()}</td>
                        <td>
                          <a
                            href={
                              "https://ropsten.etherscan.io/address/" +
                              u.eth.contractAddress
                            }
                            style={{ color: "#176075" }}
                          >
                            {u.eth.contractAddress}
                          </a>
                        </td>
                        <td className="text-center">{u.candidates.length}</td>
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

export default PollsTable;
