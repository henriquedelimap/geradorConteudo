import { useMutation } from "@apollo/client"
import { CircularProgress, ListItemButton } from "@mui/material"
import { MdEdit } from "react-icons/md"
import { UPDATE_FRASE } from "../../../../API/UPDATE/update"

interface Props {
    myId: string
    newArea?: string
    newTema?: string
    newQuote?: string
}
export const UpdateFrase = (props: Props) => {

    const { myId, newArea, newTema, newQuote } = props
    const [updateFrase, { error, loading }] = useMutation(
        UPDATE_FRASE,
        {
            refetchQueries: [
                'Frases'
            ]
        }
    )
    const newFrase = {
        myId: myId,
        area: newArea,
        tema: newTema,
        quote: newQuote
    }
    console.log(newFrase);
    if (loading) return <CircularProgress />


    return (
        <ListItemButton onClick={() => {
            updateFrase({
                variables: {
                    myId: myId,
                    frase: newFrase
                }
            })
        }}>
            <MdEdit color='white' fontSize='18' />
        </ListItemButton>
    )
}