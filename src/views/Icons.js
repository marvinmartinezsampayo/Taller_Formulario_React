import React from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import { Button } from 'react-bootstrap';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Col md="12">
            <Card>
              <CardBody>
                <div >

                  <MyComponent></MyComponent>




                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}




//const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' },{ id: 2, title: 'Ñonan the Barbarian', year: '1982' }];}
class MyComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  render() {
    // console.log(this.state.data);
    return (
      <DataTable
        title="Title"
        columns={[
          {
            name: 'Nombres y Apellidos',
            selector: 'name',
            sortable: true,
          },
          {
            name: 'Profesión',
            selector: 'profession',
            sortable: true,
          },
          {
            name: 'Prefesión',
            selector: 'profession',
            sortable: true,
            right: true,
            cell: (row) => {
              // console.log('Row: ', row);
              return (
                <Button variant="warning" onClick={()=>{this.enviar(row)}}>Primary</Button>
               
              )
            }
          },
        ]}
        data={this.state.data}
      />

    )
  }

  enviar = (developer) => {
    console.log(developer)
  }  


  //Consumir la API
  componentDidMount() {
    fetch('https://dinae-developers-api.herokuapp.com/developers')
      .then(result => result.json())
      .then(items => this.setState({ data: items }))
  };

};

export default Icons;
