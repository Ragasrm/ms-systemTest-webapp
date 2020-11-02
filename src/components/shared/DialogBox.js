import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import React, { Component } from 'react'

export default class DialogBox extends Component {
    render() {

        const { open, message, handleClose } = this.props;
        return (
            <div>
                 <Dialog
       
        open={open}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
           {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} color="primary" >
            Okay
          </Button>
                  </DialogActions>
      </Dialog>
                
            </div>
        )
    }
}
