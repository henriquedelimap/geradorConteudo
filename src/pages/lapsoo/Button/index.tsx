import { Button,Typography } from "@mui/material"

interface Props{
    handleConteudo: ()=> void
    text: string
}

export const GenerateButton = ({handleConteudo, text}: Props) => {
    return(
    <Button onClick={handleConteudo}>
        <Typography fontFamily='Outfit'>
            {text}
        </Typography>
    </Button>
)}