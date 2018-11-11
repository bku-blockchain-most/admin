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
import { getVotes } from "../api";
import moment from "moment";

const thead = [
  "",
  "ID",
  "User ID",
  "Transaction Hash",
  "Poll ID",
  "Contract Address",
  "Start Date",
  "End Date"
];

class TableVotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: []
    };

    getVotes()
      .then(votes => this.setState({ votes }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Votes</CardTitle>
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
                    {this.state.votes.map(u => (
                      <tr key={u.id}>
                        <td>
                          <i className="fa fa-link text-danger" />
                        </td>
                        <td>{u.id}</td>
                        <td>{u.userID}</td>
                        <td>
                          <a
                            href={
                              "https://ropsten.etherscan.io/tx/" + u.eth.txHash
                            }
                            style={{ color: "#176075" }}
                          >
                            {u.eth.txHash}
                          </a>
                        </td>
                        <td>{u.pollID.id}</td>
                        <td>
                          <a
                            href={
                              "https://ropsten.etherscan.io/address/" +
                              u.pollID.eth.contractAddress
                            }
                            style={{ color: "#176075" }}
                          >
                            {u.pollID.eth.contractAddress}
                          </a>
                        </td>
                        <td className="text-right">
                          {moment(u.pollID.startDate).format(
                            "HH:mm DD/MM/YYYY"
                          )}
                        </td>
                        <td className="text-right">
                          {moment(u.pollID.endDate).format("HH:mm DD/MM/YYYY")}
                        </td>
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

export default TableVotes;
