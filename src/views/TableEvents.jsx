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
import { getEvents } from "../api";
import moment from "moment";

const thead = ["", "Name", "Organizer", "Title", "Start Date"];

class TableEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    getEvents()
      .then(events => this.setState({ events }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Events</CardTitle>
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
                  <tbody>
                    {this.state.events.map(u => (
                      <tr key={u.id}>
                        <td>
                          {/* <Link to={"/events/" + u.id}> */}
                          <i className="fa fa-link text-danger" />
                          {/* </Link> */}
                        </td>
                        <td>{u.event_name}</td>
                        <td>{u.organizer}</td>
                        <td>{u.title}</td>
                        <td className="text-right">
                          {moment(u.starting_date).format("HH:mm DD/MM/YYYY")}
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

export default TableEvents;
