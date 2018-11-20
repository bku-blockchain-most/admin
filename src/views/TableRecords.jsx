import React from "react";
import { Card, CardBody, Table, Row, Col } from "reactstrap";
import moment from "moment";

const thead = ["Partner", "Time", "Note"];

class TableRecords extends React.Component {
  render() {
    const { records } = this.props;

    return (
      <Row>
        <Col xs={12}>
          <Card>
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
                  {records.map(u => (
                    <tr key={u.id}>
                      <td>{(u.partner || {}).username}</td>
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

export default TableRecords;
