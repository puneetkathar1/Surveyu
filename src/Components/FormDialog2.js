import  React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import  { Link, Redirect, useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from '../Assets/logo.png';
import Axios from "axios";
import { UserContext } from './UserContext';


export default function FormDialog2(props) {
  
  let history = useHistory()
  const username = useContext(UserContext)
  const [data, setData] = React.useState({
    password: ""
  });
  const {title2, children2, openPopup2, setOpenPopup2} = props
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose2 = () => {
    setOpenPopup2(false);
  };

  const mycallback=()=>{

  }
    function  handleSubmit () {
      Axios.post("https://surveyeu.herokuapp.com/login", {
        username: username,
        password: data.password
      }, {
        withCredentials: true
      }).then((res : AxiosResponse) => {
        
       res.data ? history.push('https://puneetkathar1.github.io/Surveyu/myaccount') : console.log(Error)});
       window.location.reload();
       window.location.href = "https://puneetkathar1.github.io/Surveyu/myaccount";
    setOpenPopup2(false)
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
      <Dialog open={openPopup2} onClose={handleClose2} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ color:"#4b778d", backgroundColor:"#d2e69c"}}>Enter OTP</DialogTitle>
        <DialogContent>
          <DialogContentText >
          <img src={logo} style={{width:"50vh"}}  />
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Enter OTP from E-mail"
            type="string"
            fullWidth
            required
            onSubmit={handleSubmit}
            onChange={(e) => handleChange(e)}
            value={data.password}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

