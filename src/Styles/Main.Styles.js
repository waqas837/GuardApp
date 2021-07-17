import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";
var Maingrey = grey[400];
var MainCyan = "rgb(47,211,202)";
const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    background: MainCyan,
    color: "white",
    borderRadius:"50px"
  },
  buttonStyleOutlined: {
    border:`2px solid ${MainCyan}`,
    borderRadius:"50px"
  },
  resposiveFromSide:{
     [theme.breakpoints.down('sm')]:{
         marginLeft:"50px"
     }
  },
  input:{
    height:"35px",
    borderRadius:"50px"
  },
  formControl: {
    minWidth: 160,
  },
  formControl2: {
    minWidth: 160,
    marginTop:"-15px"
  },
  card:{
    width:"230px",
    [theme.breakpoints.down('sm')]:{
      marginLeft:"-70px"
    }
  }
}));

export { Maingrey, MainCyan, useStyles };
