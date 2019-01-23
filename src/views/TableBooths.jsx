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
import { getBooths } from "../api";
import moment from "moment";
import HorizontalLoading from "../components/HorizontalLoading";

const thead = ["Village", "Name", "Host", "Start Date"];

class TableBooths extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booths: [],
      loading: true
    };

    setTimeout(() => {
      getBooths()
        .then(booths => this.setState({ booths, loading: false }))
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
                <CardTitle tag="h4">Booths</CardTitle>
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
                      {this.state.booths.map(u => (
                        <tr key={u.bid}>
                          <td>{u.vid}</td>
                          <td
                            style={{
                              maxWidth: 300,
                              textOverflow: "ellipsis",
                              overflow: "hidden"
                            }}
                          >
                            {u.booth_name}
                          </td>
                          <td
                            style={{
                              maxWidth: 300,
                              textOverflow: "ellipsis",
                              overflow: "hidden"
                            }}
                          >
                            {u.host}
                          </td>
                          <td className="">
                            {moment(u.starting_date).format("HH:mm DD/MM/YYYY")}
                          </td>
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

export default TableBooths;
