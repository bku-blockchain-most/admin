import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col
} from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Records from "./Records";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";

import { getUserByUsername, getRecordsByUserID } from "../api";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      records: []
    };
  }

  componentWillMount() {
    const { username } = this.props.match.params || {};
    // console.log(username);
    getUserByUsername(username)
      .then(user => {
        this.setState({ user });
        getRecordsByUserID(user.id)
          .then(records => this.setState({ records }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src={damirBosnjak} alt="Photo" />
              </div>
              <CardBody>
                <CardAuthor
                  avatar={user.photoUrl}
                  avatarAlt="..."
                  title={user ? user.firstName + " " + user.lastName : ""}
                  description={"@" + user.username}
                />
                <p className="description text-center">
                  {user.company || ""} <br />
                  {user.position || ""}
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={3} className="ml-auto">
                      <h5>
                        12
                        <br />
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col
                      xs={6}
                      sm={6}
                      md={6}
                      lg={4}
                      className="mr-auto ml-auto"
                    >
                      <h5>
                        2GB
                        <br />
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col lg={3} className="mr-auto">
                      <h5>
                        24,6$
                        <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Contacts</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  {(user.contacts || []).map(o => (
                    <li key={o.id}>
                      <Row>
                        <Col xs={2} md={2}>
                          <div className="avatar">
                            <img
                              src={o.photoUrl}
                              alt="Photo"
                              className="img-circle img-no-padding img-responsive"
                            />
                          </div>
                        </Col>
                        <Col xs={7} md={7}>
                          {o.firstName + " " + o.lastName}
                          <br />
                          <span className="text-danger">
                            <small>@{o.username}</small>
                          </span>
                        </Col>
                        <Col xs={3} md={3} className="text-right">
                          <a href={"/users/" + o.username} target="_blank">
                            <Button size="sm" color="danger" round icon outline>
                              <i className="fa fa-ellipsis-h" />
                            </Button>
                          </a>
                        </Col>
                      </Row>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-5 pr-1", "col-md-3 px-1", "col-md-4 pl-1"]}
                    proprieties={[
                      {
                        label: "Company (disabled)",
                        inputProps: {
                          type: "text",
                          disabled: true,
                          defaultValue: "Creative Code Inc."
                        }
                      },
                      {
                        label: "Username",
                        inputProps: {
                          type: "text",
                          defaultValue: user.username || ""
                        }
                      },
                      {
                        label: "Email address",
                        inputProps: {
                          type: "email",
                          defaultValue: user.email || "",
                          placeholder: "Email"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                    proprieties={[
                      {
                        label: "First Name",
                        inputProps: {
                          type: "text",
                          placeholder: "First Name",
                          defaultValue: user.firstName || ""
                        }
                      },
                      {
                        label: "Last Name",
                        inputProps: {
                          type: "text",
                          placeholder: "Last Name",
                          defaultValue: user.lastName || ""
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Company",
                        inputProps: {
                          type: "text",
                          placeholder: "Company",
                          defaultValue: user.company || ""
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Position",
                        inputProps: {
                          type: "text",
                          placeholder: "Position",
                          defaultValue: user.position || ""
                        }
                      }
                    ]}
                  />
                  {/* <FormInputs
                    ncols={["col-md-4 pr-1", "col-md-4 px-1", "col-md-4 pl-1"]}
                    proprieties={[
                      {
                        label: "City",
                        inputProps: {
                          type: "text",
                          defaultValue: "Melbourne",
                          placeholder: "City"
                        }
                      },
                      {
                        label: "Country",
                        inputProps: {
                          type: "text",
                          defaultValue: "Australia",
                          placeholder: "Country"
                        }
                      },
                      {
                        label: "Postal Code",
                        inputProps: {
                          type: "number",
                          placeholder: "ZIP Code"
                        }
                      }
                    ]}
                  /> */}
                  {/* <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "About Me",
                        inputProps: {
                          type: "textarea",
                          defaultValue:
                            "Oh so, your weak rhyme You doubt I'll bother, reading into it",
                          placeholder: "Here can be your description"
                        }
                      }
                    ]}
                  /> */}
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>

            <Card className="card-user">
              <CardHeader>
                <CardTitle>Records</CardTitle>
              </CardHeader>
              <CardBody>
                <Records records={this.state.records} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserProfile;
