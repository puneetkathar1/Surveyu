import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from '../Assets/logo.png';
import FormDialog2 from './FormDialog2';
import Axios from 'axios';
import { UserContext } from './UserContext'


export default function FormDialog(props) {

   


  const [data, setData] = React.useState({
    username: ""
  });
  

  const [openPopup2, setOpenPopup2] = React.useState(false);
  const {title, children, openPopup, setOpenPopup} = props
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpenPopup(false);
  };

  function handleSubmit({}){

  const url = "http://localhost:5000/register"



  if((data.username).length < 10) {
    
    setOpenPopup(false);
    setOpenPopup2(false);
    alert("Invalid Email")

  } 
  else if((data.username).indexOf(".")===-1) {
    setOpenPopup(false);
    setOpenPopup2(false);
    alert("Invalid Email")

  }
  else if((data.username).indexOf("@")===-1) {
    setOpenPopup(false);
    setOpenPopup2(false);
    alert("Invalid Email")

  }
  else if(/\s/.test(data.username)) {
    setOpenPopup(false);
    setOpenPopup2(false);
    alert("Invalid Email")

  }


  
  
  else {  
     Axios.post(url, {
      username: data.username
    })
    .then(res =>{
      console.log(res.data)
    })
     setOpenPopup(false);
     setOpenPopup2(true);
  } 
  }

function handleChange(e){
  const newdata = {...data}
  newdata[e.target.id] = e.target.value
  setData(newdata)
  console.log(newdata)
}
 

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <UserContext.Provider value={data.username}>
      <FormDialog2
openPopup2 = {openPopup2}
setOpenPopup2 = {setOpenPopup2}
/>
</UserContext.Provider>
<form onSubmit={handleSubmit}>
      <Dialog onSubmit={handleSubmit} open={openPopup} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ color:"#4b778d", backgroundColor:"#d2e69c"}}>Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText >
          <img src={logo} style={{width:"50vh"}}  />
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Email Address"
            type="email"
            required
            onSubmit={handleSubmit}
            fullWidth
            onChange={(e) => handleChange(e)}
            value={data.username}

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
}

