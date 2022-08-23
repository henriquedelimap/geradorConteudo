import { useMutation } from "@apollo/client"
import { Box, Stack, Paper, Typography, Divider, Fade, ListItemButton } from "@mui/material"
import { MdRemove, MdEdit } from "react-icons/md"
import { DELETE_FRASE } from "../../../API/DELETE/delete"
import { IFrase } from "../../../Type"

interface Props {
  handleToggle: (value: number) => () => void
  index: number
  checked: number[]
  item: IFrase
}

export const Item = (props: Props) => {
  const { handleToggle, checked, item, index } = props
  const [deleteFrase, { loading, error, data }] = useMutation(DELETE_FRASE)
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
            <Stack sx={{ height: '100%', width: 80, maxHeight: 80 }} justifyContent='space-around'  >
              <Typography variant={'body2'} >
                {item.area}
              </Typography>
              <Divider />
              <Typography noWrap variant={'body2'} >
                {item?.tema}
              </Typography>
            </Stack>

            <Stack sx={{ p: 4 }} >
              <Typography variant={'body1'}  >
                {item.quote}
              </Typography>
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
              <ListItemButton>

                <MdEdit color='white' fontSize='18' />
              </ListItemButton>
            </Stack>
          </Fade>
        </Stack>

      </Stack>
    </Box>
  )
}