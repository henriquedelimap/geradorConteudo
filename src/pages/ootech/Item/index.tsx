import { useMutation } from "@apollo/client"
import { Box, Stack, Paper, Typography, Divider, Fade, ListItemButton, LinearProgress, OutlinedInput, TextField } from "@mui/material"
import { useState } from "react"
import { MdRemove, MdEdit } from "react-icons/md"
import { DELETE_FRASE } from "../../../API/DELETE/delete"
import { IFrase } from "../../../Type"
import { UpdateFrase } from "./update"

interface Props {

  handleToggle: (value: number) => () => void
  index: number
  checked: number[]
  item: IFrase
}
export const Item = (props: Props) => {

  const {
    handleToggle,
    checked,
    item,
    index,

  } = props

  const [newArea, setNewArea] = useState<string>(item.area)
  const [newTema, setNewTema] = useState<string>(item.tema)
  const [newQuote, setNewQuote] = useState<string>(item.quote)


  const [deleteFrase, { loading, error }] = useMutation(DELETE_FRASE,
    {
      refetchQueries: [
        'Frases'
      ]
    }
  )
  if (loading) return <LinearProgress />




  return (
    <Box
      key={item.myId}
      sx={{
        background: '#ffffff1f',
        backdropFilter: 'blur(10px)',
      }}
      onClick={handleToggle(index)}>

      <Stack direction='row' alignItems='center' sx={{ width: '100%' }}>



        <Paper elevation={0} sx={{ width: '100%', border: checked.indexOf(index) !== -1 ? '1px solid #0066cc' : '1px solid transparent', borderRadius: checked.indexOf(index) !== -1 ? '.4rem 0 0 .4rem' : '.4rem' }}>

          <Stack direction='row' alignItems='center' justifyContent='stretch' sx={{ p: 2, pr: 0, height: '100%' }} >
            <Stack spacing={.5} sx={{ height: '100%', width: { xs: 80, md: 120, lg: 120 }, maxHeight: 80 }} justifyContent='space-around'  >

              <TextField
                variant="standard"
                label={item.area}
                size='small'
                sx={{ width: '100%' }}

                onChange={(e) => setNewArea(e.target.value || item.area)}
                placeholder={item.area}

                disabled={checked.indexOf(index) !== -1 ? false : true}

              />

              <TextField
                variant="standard"
                label={item.tema}
                size='small'
                sx={{ width: '100%' }}

                onChange={(e) => setNewTema(e.target.value === undefined ? item.tema : e.target.value)}
                placeholder={item.tema}

                disabled={checked.indexOf(index) !== -1 ? false : true}

              />

            </Stack>

            <Stack sx={{ width: '100%', p: 2 }} >

              <TextField
                variant="standard"
                label={item.quote}
                size='medium'
                placeholder={item.quote}

                onChange={(e) => setNewQuote(e.target.value || item.quote)}

                sx={{ width: '100%' }}
                disabled={checked.indexOf(index) !== -1 ? false : true}

              />

            </Stack>

          </Stack>
        </Paper>
        <Stack sx={{ display: checked.indexOf(index) !== -1 ? 'flex' : 'none', width: 40 }}>


          <Fade in={checked.indexOf(index) !== -1}>

            <Stack sx={{
              width: '100%',
              height: '100%',
              bgcolor: '#0066cc',
              borderRadius: '0 .4rem .4rem 0',
              p: 2
            }}
              alignItems='center'
              justifyContent='space-around'

            >


              <ListItemButton onClick={() => {
                deleteFrase({
                  variables: {
                    myId: item.myId
                  }
                })
              }} >

                <MdRemove color='white' fontSize='18' />
              </ListItemButton>


              <UpdateFrase myId={item.myId} newQuote={newQuote} newTema={newTema} newArea={newArea} />
            </Stack>
          </Fade>
        </Stack>

      </Stack>
    </Box>
  )
}