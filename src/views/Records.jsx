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
import { getRecordsByUserID } from "../api";
import moment from "moment";

const thead = ["Partner", "Time", "Note"];

class RecordsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
  }

  render() {
    const { userID } = this.props;
    getRecordsByUserID(userID)
      .then(records => this.setState({ records }))
      .catch(err => console.log(err));

    return (
      <Row>
        <Col xs={12}>
          <Card>
            {/* <CardHeader>
              <CardTitle tag="h4">Records</CardTitle>
            </CardHeader> */}
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
                  {this.state.records.map(u => (
                    <tr key={u.id}>
                      {/* <td> */}
                      {/* <Link to={"/polls/" + u.id}> */}
                      {/* <i className="fa fa-link text-danger" /> */}
                      {/* </Link> */}
                      {/* </td> */}
                      <td>{u.partner.username}</td>
                      <td>{moment(u.time).format("HH:mm DD/MM/YYYY")}</td>
                      <td>{u.note}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default RecordsTable;
