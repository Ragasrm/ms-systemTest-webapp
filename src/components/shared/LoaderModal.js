import { CircularProgress, Dialog, DialogContent } from '@material-ui/core'
import React, { Component } from 'react'

export default class LoaderModal extends Component {
    render() {

        const { open} = this.props;
        return (
            <div>
                 
                 <Dialog      
            open={open}
      
       aria-labelledby="responsive-dialog-title"
     >
       <DialogContent>
       <CircularProgress />
       </DialogContent>
      
     </Dialog>
            </div>
        )
    }
}
