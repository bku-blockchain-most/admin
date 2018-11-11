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
import { getPolls } from "../api";
import moment from "moment";

const thead = [
  "",
  "Event ID",
  "Owner ID",
  "Contract Address",
  "Start Date",
  "End Date",
  "No.Cand",
  "Title"
];

class TablePolls extends React.Component {
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
                <Table size="sm" hover>
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
                        <td>
                          <Link to={"/polls/" + u.id}>
                            <i className="fa fa-link text-danger" />
                          </Link>
                        </td>
                        <td>{u.eventID}</td>
                        <td>{u.ownerID}</td>
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
                        <td className="text-right">
                          {moment(u.startDate).format("HH:mm DD/MM/YYYY")}
                        </td>
                        <td className="text-right">
                          {moment(u.endDate).format("HH:mm DD/MM/YYYY")}
                        </td>
                        <td className="text-center">{u.candidates.length}</td>
                        <td>{u.title}</td>
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

export default TablePolls;
