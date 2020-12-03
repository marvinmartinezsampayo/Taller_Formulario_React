
import React from "react";
import NotificationAlert from "react-notification-alert";
// reactstrap components
// import { UncontrolledAlert, Alert, Button, Card, CardHeader, CardBody, CardTitle, Row, Col,} from "reactstrap";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const dataUser =  [    {
  "hardSkills": [
      "java",
      "visual"
  ],
  "softSkills": [
      "redes"
  ],
  "_id": "5fc816da69b2300017af8c0f",
  "name": "Paola Cubidez",
  "profession": "psicologa",
  "birthDate": "1989-09-13T05:00:00.000Z",
  "joinDate": "2010-12-02T05:00:00.000Z",
  "__v": 0,
  "createdAt": "2020-12-02T22:36:10.118Z",
  "updatedAt": "2020-12-02T22:37:45.991Z"
}
]  


class Notifications extends React.Component {
  

  sentdata = (event) => {
    event.preventDefault()
    // console.log(event.target.userName.value);
    console.log("arrayofData: ", {
                                  nombre: event.target.userName.value,
                                  email: event.target.email.value,
                                  firtsname: event.target.fname.value,
                                  lastname: event.target.lname.value
                                }
                                );
  }

 
  render() {
    return (
      <>
        <div className="content">
          <NotificationAlert ref={this.notificationAlert} />
          <Row>
            <Col md="12">
              
              <Card>
                <CardHeader>
                <CardTitle tag="h4">Update Developers</CardTitle>
                </CardHeader>
                <CardBody>

                <Form onSubmit ={this.sentdata}>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue="Creative Code Inc."
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            // defaultValue="michael23"
                          
                            placeholder="Username"
                            name="userName"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" name="email"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue="Chet"
                            placeholder="Company"
                            name="fname"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Faker"
                            placeholder="Last Name"
                            name="lname"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="Melbourne, Australia"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue="Melbourne"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="Australia"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            type="textarea"
                            defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Send data in array
                        </Button>
                      
                      </div>
                    </Row>
                  </Form>

                </CardBody>
              </Card>
            </Col>
          </Row>
       
        </div>
      </>
    );
  }
}

export default Notifications;
