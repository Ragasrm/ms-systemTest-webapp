import React, { Component } from "react";
import { getUsers } from "../services/httpService";
import TableBuilder from "../shared/TableBuilder";

export default class Dashboard extends Component {
  tableColumns = [];
  constructor(props) {
    super(props);
    this.tableColumns = [
      { title: "Name", field: "firstName" },
      { title: "Gender", field: "gender" },
      { title: "User Name", field: "email" },
      { title: "Country", field: "country" },
    ];
   

    this.state = {
      data:[]
     
  }
}


/**********************************************************************************************************************
********************************Life Cycle methods*********************************************************************
**********************************************************************************************************************/

  componentDidMount() {
    getUsers()
      .then((res) => {
       console.log('res', res.data)
       this.setState({
      //  data: res.data,
      });
      })
      .catch((err) => err.mess);
  }


  /**********************************************************************************************************************
   ********************************render method*************************************************************************
   **********************************************************************************************************************/
  render() {
    return (
      <div>
         <h1>Welcome <span color="inherit">{localStorage.getItem('username')}</span></h1>
         <div>
         <TableBuilder
              title="User"
              columns={this.tableColumns}
              data={this.state.data}            
            />
         </div>
      </div>
    );
  }
}
