import Button from '@mui/material/Button';

const estiloCircular  = {borderRadius: '100%',  padding:'6px 0px', minWidth:'35px'};

const ButtonPrimary = (props) => {
    return (
      <Button variant="contained" style={{background: props.colorPrinc, "&:hover": {background: props.colorSec}}}>
      {props.title}
      </Button>
    )
}

// const ButtonSecondary = (props) => {
//   return (
//     <Button variant="contained" sx={{color: '#000', background: withe, "&:hover": {background: greySecondary}}}>
//     {props.title}
//     </Button>
//   )
// }

const ButtonIcon = (props) => {
  return(
    <Button variant="contained" sx={{background: props.colorPrinc, "&:hover": {background: props.colorSec}}}
       endIcon= {props.Icon}
    >
      {props.title}
    </Button>
  )
}

const ButtonCirclePrimary = (props) =>{
  return(
    <Button variant="contained" sx={{...estiloCircular, background: props.colorPrinc,  "&:hover": {background: props.colorSec}}}>
    {props.Icon}
    </Button>
  )
}

// const ButtonCircleSeccondary = (props) =>{
//   return(
//     <Button variant="contained" sx={{...estiloCircular, background: withe, color:'#000', "&:hover": {background: greySecondary}}}> 
//     {props.Icon}
//     </Button>
//   )
// }

export default {
  ButtonPrimary, 
  // ButtonSecondary,
  ButtonIcon,
  ButtonCirclePrimary,
  // ButtonCircleSeccondary,
} 
