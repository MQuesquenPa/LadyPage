import Button from '@mui/material/Button';
import Colors from '../Colors';


const {blackPrimary, blackSecondary, blackTertiary, greyPrimary, greySecondary, redPrimary, redSecondary} = Colors;

const ButtonPrimary = (props) => {
    return (
      <Button variant="contained" sx={{background: redPrimary}}>
      {props.title}
      </Button>
    )
}

const ButtonIcon = (props) => {
  return(
    <Button variant="contained" sx={{background: redPrimary}} endIcon={props.Icon}>
      {props.title}
    </Button>
  )
}

export default {
  ButtonPrimary, 
  ButtonIcon
} 
