import React, { Component } from 'react'
import { Button} from '@material-ui/core'
import TableBuilder from '../shared/TableBuilder';
import FormFileds from './FormFileds';
import { saveProduct, getProduct, updateProduct, deleteProduct } from '../services/httpService';
import * as uuid from "uuid"

export default class Product extends Component {
    tableColumns=[]
    constructor(props) {

        super(props)

        this.tableColumns = [
            { title: 'Name', field: 'name' },
            { title: 'Shop Name', field: 'shopName' },
            { title: 'Status', field: 'status' }
        ]
    
        this.state = {

            // common state
            showProductForm:false,
            // productFormState
            title:'',
            display:false,
            name:'',
            shopName:'',
            status:'',
            _id:'',
            
            // tableState
            data:[]
             
        }
    }
    /**********************************************************************************************************************
   ********************************Life Cycle methods*********************************************************************
   **********************************************************************************************************************/ 

   componentDidMount() {
    getProduct().then(res =>{
        this.setState({
            data:res.data

        })
    }).catch(err => err.mess)
   }

/**************************************handleChange methods**********************************************************/
handleAddProductButton = (btn='other') =>{
    if(btn === 'cancel'){
        this.setState({
            title:'',
            _id:'',
            name:'',
            shopName:'',
            status:'',
            display:false,
            showProductForm:!this.state.showProductForm
        })

    }
    else {
        this.setState({
            title:'Add Product',
            showProductForm:!this.state.showProductForm
        })

    }
   
}

handleFormFieldsChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

/**************************************handleSave methods**********************************************************/

handleSave = () =>{

    // prepare data to store
    let data = {
        _id:uuid.v4(),
        name:this.state.name,
        shopName: this.state.shopName,
        status: this.state.status
    }

    let tableData = [...this.state.data,data]

    // sending data to service 
    saveProduct(data).then(result =>{
        if(result){
            this.setState({
                data:tableData,
                name:'',
                shopName:'',
                status:'',

            })
        }
    }).catch(err=>{
        console.log(err.message)
    })
}

handleUpdate = () =>{

    let updateID=this.state._id
    let data = {
        _id:this.state_id,
        name:this.state.name,
        shopName: this.state.shopName,
        status: this.state.status
    }

    let tableData = [...this.state.data,data]

      // sending data to service 
      updateProduct(data,updateID).then(result =>{
         
        if(result.data){
          
            this.setState({
                data:result.data,
                name:'',
                shopName:'',
                status:'',
                showProductForm:false
            })

      

            console.log('update reuslt',result.data)
           
        }
    }).catch(err=>{
        console.log(err.message)
    })


   
}


/**************************************Table methods**********************************************************/

handleEdit= (e,rowData) =>{
    this.setState({
        title:'Update Product',
        display:false,
        _id:rowData._id,
        name:rowData.name,
        shopName:rowData.shopName,
        status:rowData.status,
        showProductForm:true
    })
}

handleDelete = (e,rowData) =>{
let id = rowData._id
  

    deleteProduct(id).then(result =>{

        this.setState({
            data:result.data,
          
        })
       
    }).catch(
        err =>err.message
    )
   

}

handleView =  (e,rowData) =>{
    this.setState({
        title:'View Product',
        display:true,
        name:rowData.name,
        shopName:rowData.shopName,
        status:rowData.status,
        showProductForm:true
    })




}












    



   /**********************************************************************************************************************
   ********************************render methods*************************************************************************
   **********************************************************************************************************************/ 
    render() {
        return (
         <div>  
             {
                 !this.state.showProductForm &&

                    <div>
                    <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={this.handleAddProductButton}
                    >Add Product
                    </Button> 
                    </div>

             } 
           

{/* /**************************************formfileds*********************************************************************************************/}

          {
              this.state.showProductForm &&
              <div style={{ paddingTop: 10 }}>
               <FormFileds
                title={this.state.title}
                display={this.state.display}
                name={this.state.name}
                shopName={this.state.shopName}
                status ={this.state.status}
                handleChange = {this.handleFormFieldsChange}
                handleCancel={this.handleAddProductButton}
                handleSave={this.handleSave}
                handleUpdate={this.handleUpdate}/>
            </div>
          }
            
            


{/* /**************************************Table Builder*********************************************************************************************/}
        
            <div style={{ paddingTop: 10 }}>    
            <TableBuilder
             title="Product Details"
             columns={this.tableColumns}
             data={this.state.data}
             handleEdit={this.handleEdit} 
             handleDelete={this.handleDelete}
             handleView={this.handleView}
             actions={['Edit','View','Delete']}
            
            />
            </div>




        </div>   
        )
    }
}
