import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import FormInputs from "../components/FormInputs.jsx";
import Button from "../components/CustomButton.jsx";
import { createPoll } from "../api/index.js";
import Loading from "../components/Loading.jsx";

let keyCandidates = 0;

class FormAddPoll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventID: "",
      ownerID: "",
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
      candidates: [],
      txHash: "",
      loading: false,
      modal: false
    };

    for (let i = 0; i < 4; i++) {
      this.state.candidates.push({
        name: "",
        key: ++keyCandidates
      });
    }
  }

  handleClick = () => {
    console.log(this.state);
    this.setState({ loading: true });
    createPoll(this.state)
      .then(data => {
        const { txHash } = data.eth;
        console.log(txHash);
        this.setState({ loading: false, txHash, modal: true });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  render() {
    return (
      <div className="content">
        <Loading visible={this.state.loading} />
        <Modal
          isOpen={this.state.modal}
          toggle={() => (window.location = "/polls")}
        >
          <ModalHeader toggle={() => (window.location = "/polls")}>
            Successful
          </ModalHeader>
          <ModalBody>
            <p style={{ fontSize: "1em" }}>
              Poll is created and deploy smart contract successfully.{" "}
            </p>
            <p style={{ fontSize: "1em" }}>
              Your Transaction Hash on Ethereum Network:
            </p>
            <a
              href={"https://ropsten.etherscan.io/tx/" + this.state.txHash}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.9em" }}
            >
              {this.state.txHash}
            </a>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => (window.location = "/polls")}
            >
              OK
            </Button>
          </ModalFooter>
        </Modal>
        <Row>
          <Col lg={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Add new Poll</CardTitle>
              </CardHeader>
              <CardBody>
                <CardTitle className="h6">Basic information</CardTitle>
                <form>
                  <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-3 px-1", "col-md-3 pl-1"]}
                    proprieties={[
                      {
                        label: "Title",
                        inputProps: {
                          type: "text",
                          defaultValue: this.state.title,
                          onChange: ev =>
                            this.setState({ title: ev.target.value })
                        }
                      },
                      {
                        label: "Event ID",
                        inputProps: {
                          type: "text",
                          defaultValue: this.state.eventID,
                          onChange: ev =>
                            this.setState({ eventID: ev.target.value })
                        }
                      },
                      {
                        label: "Organizer ID",
                        inputProps: {
                          type: "text",
                          defaultValue: this.state.ownerID,
                          onChange: ev =>
                            this.setState({ ownerID: ev.target.value })
                        }
                      }
                    ]}
                  />

                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Description",
                        inputProps: {
                          type: "textarea",
                          defaultValue: this.state.description,
                          placeholder: "Here can be your description",
                          onChange: ev =>
                            this.setState({ description: ev.target.value })
                        }
                      }
                    ]}
                  />
                  <div className="row">
                    <div className="col-6">
                      <span className="mr-4">Start Date:</span>
                      <DatePicker
                        selectsStart
                        selected={this.state.startDate}
                        minDate={this.state.startDate}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={date => {
                          this.setState({ startDate: date });
                        }}
                        timeFormat="HH:mm"
                        showTimeSelect
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy HH:mm"
                        timeCaption="Time"
                        className="form-control"
                      />
                    </div>
                    <div className="col-6">
                      <span className="mr-4">End Date:</span>
                      <DatePicker
                        selectsEnd
                        selected={this.state.endDate}
                        minDate={this.state.startDate}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={date => {
                          this.setState({ endDate: date });
                        }}
                        timeFormat="HH:mm"
                        showTimeSelect
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy HH:mm"
                        timeCaption="Time"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <CardTitle className="h6 mt-5">Candidates</CardTitle>
                  {this.state.candidates.map(o => (
                    <div key={o.key} className="row">
                      <div className="col-11">
                        <FormInputs
                          ncols={["col-md-11"]}
                          proprieties={[
                            {
                              inputProps: {
                                type: "text",
                                value: o.name,
                                placeholder: "Candidate name",
                                onChange: ev => {
                                  const name = ev.target.value;
                                  this.setState({
                                    candidates: this.state.candidates.map(p =>
                                      o.key === p.key ? { ...p, name } : p
                                    )
                                  });
                                }
                              }
                            }
                          ]}
                        />
                      </div>
                      <div className="col-1">
                        <Button
                          size="sm"
                          color="danger"
                          round
                          icon
                          outline
                          onClick={() => {
                            this.setState({
                              candidates: this.state.candidates.filter(
                                p => p.key !== o.key
                              )
                            });
                          }}
                        >
                          <i className="fa fa-times" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    color="danger"
                    round
                    onClick={() => {
                      this.setState({
                        candidates: [
                          ...this.state.candidates,
                          {
                            name: "",
                            key: ++keyCandidates
                          }
                        ]
                      });
                    }}
                  >
                    Add a candidate
                  </Button>

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        color="primary"
                        round
                        onClick={() => this.handleClick()}
                      >
                        Create and Deploy new Smart contract
                      </Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FormAddPoll;
