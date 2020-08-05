import React, { Component, forwardRef } from "react";
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";
import CropFreeRoundedIcon from '@material-ui/icons/CropFreeRounded';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';



export default class TableBuilder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             columns:[],
             data: []
        }
    }
    


  tableIcons = {
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    CropFreeRoundedIcon: forwardRef((props, ref) => <CropFreeRoundedIcon {...props} ref={ref} />),
    VisibilityIcon: forwardRef((props, ref) => <VisibilityIcon {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumnIcon {...props} ref={ref} />),
   

  };



  getActionElements = (actions) =>{

    let elements = 
         [       
             
              {
                icon: this.tableIcons.VisibilityIcon,
                tooltip: "view Record",
                onClick: this.props.handleView,
                position:"row",
                name: 'View'

              },
              {
              icon: this.tableIcons.Edit,
              tooltip: "Edit location",
              onClick: this.props.handleEdit,
              position:"row",
              name: 'Edit'

            },
            {
                icon: this.tableIcons.Delete,
                tooltip: "Delete location",
                onClick: this.props.handleDelete,
                position:"row",
                name: 'Delete'
            }
         ]
  return elements.filter(element =>  actions && actions.indexOf(element.name) !== -1 )
  }



  render() {
     
       let columns= this.props.columns
       let data= this.props.data
       let title = this.props.title
       let actions = this.props.actions
       let handleRowClick = this.props.handleRowClick ? this.props.handleRowClick : ()=>  {}
       let loading = this.props.loading || false
       

    return (
        
     
        <MaterialTable
          isLoading={loading}
          icons={this.tableIcons}
          title={title}
          columns={columns}
          data={data}
          onRowClick={handleRowClick} 
          
          
          actions={
            
            columns.length > 0 ? 
            [
             ...this.getActionElements(actions),
           

            ] : []} 

          options={{              
            actionsColumnIndex: -1, 
            headerStyle:{
              backgroundColor: '#f0f5f4',
              color: '#00695a',
              fontSize:18,
              fontWeight:'bold'             
            },
            columnsButton:true
          
           
          }}

              //Code for prefix icon in tables list
              detailPanel={[ 
                {
                  icon: this.tableIcons.PrefixIcon,
                  disabled: true,
                  render: rowData => {
                    return (
                      <div>
                      
                      </div>
                    )
                  },
                }]}   
        />

    


  
    );
  }
}
