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
import HorizontalLoading from "../components/HorizontalLoading";

const thead = [
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
      polls: [],
      loading: true
    };

    setTimeout(() => {
      getPolls()
        .then(polls => this.setState({ polls, loading: false }))
        .catch(err => console.log(err));
    }, 200);
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <div className="row">
                  <div className="col-6">
                    <CardTitle tag="h4">Polls</CardTitle>
                  </div>
                  <div className="col-6 text-right" style={{}}>
                    <Link
                      to={"/polls/create"}
                      className="btn btn-primary btn-round"
                      style={{ paddingLeft: 40, paddingRight: 40 }}
                    >
                      Create
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardBody style={{ overflow: "auto" }}>
                <HorizontalLoading
                  visible={this.state.loading}
                  style={{ marginBottom: 30 }}
                />
                {!this.state.loading && (
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
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TablePolls;
