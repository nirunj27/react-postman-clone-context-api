import { Snackbar } from '@mui/material'
import React from 'react'

const SnackBar = ({error,seterror,errormsg}) => {

    const handleClose = () => {
        seterror(false)
    }
  return (
   <Snackbar
     open={error}
     autoHideDuration={3000}
     onClose={handleClose}
     message={errormsg}
    />
  )
}

export default SnackBar
