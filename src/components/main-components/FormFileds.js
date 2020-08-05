import React, { Component } from 'react'
import { Button, Card, CardContent, CardActions, Typography, Grid, TextField } from '@material-ui/core'


export default class FormFileds extends Component {
    render() {
        const {title,display, name, shopName, status, handleChange, handleCancel, handleSave,handleUpdate } = this.props
        return (
            <div>
                 <Card>
                    <CardContent>
                        <Typography variant="h5" style={{ paddingBottom: 15 }}>{title}</Typography>

                        <Grid container spacing={1} direction="row">
                           <Grid style={{marginLeft:55}}  item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <TextField
                                //className="fc"  
                                //id={fieldName}
                                onChange={handleChange}
                                label="Name"
                                //required={required}
                                variant="outlined"
                                name="name"                            
                                value={name}
                                InputProps={{
                                    readOnly: display,
                                  }}
                                />                           
                            </Grid>

                            <Grid style={{marginLeft:55}}  item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <TextField
                                //className="fc"  
                                //id={fieldName}
                                onChange={handleChange}
                                label="Shop Name"
                                //required={required}
                                variant="outlined"
                                name="shopName"                              
                                value={shopName}
                                InputProps={{
                                    readOnly: display,
                                  }}
                                />                           
                            </Grid>


                            <Grid style={{marginLeft:55}}  item xs={12} sm={6} md={3} lg={3} xl={3}>
                                <TextField
                                //className="fc"  
                                label="Status"
                                multiline
                                rowsMax={4}
                                name="status"
                                value={status}
                                onChange={handleChange}
                                variant="outlined"
                                InputProps={{
                                    readOnly: display,
                                  }}
                                
                                />            
                            </Grid>
                           
                        </Grid>

                    </CardContent>
                    <CardActions >
                    <div style={{ marginLeft:'auto' }}>
                        {
                            !display &&
                            <Button
                            style={{marginRight:10}}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={title === 'Add Product' ? handleSave : handleUpdate}
                            >{title === 'Add Product' ? 'Save' : 'Update' }
                            </Button> 
                        }
                       

                        <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={()=>handleCancel('cancel')}
                        >Cancel
                        </Button> 
                        </div>
                    </CardActions>
                </Card>
                
            </div>
        )
    }
}
