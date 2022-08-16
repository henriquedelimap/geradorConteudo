import { Button, Grid, IconButton, OutlinedInput, Typography, Stack } from '@mui/material'
import styled from "@emotion/styled";

import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { OOLogo } from './OOTECHNOLOGY'
function App() {
  const [newValue, setNewValue] = useState('')
  const [gerado, setGerado] = useState('inicial')
  const [value, setValue] = useState([
    'fgts', 'financiamento modaliade fgts', 'compre casa', 'compre imovel'
  ])

  const aleatorio = Math.floor(Math.random() * value.length)
  function handleConteudo() {
    setGerado(prev => prev === value[aleatorio] ? value[aleatorio + 1] : value[aleatorio])
  }


  return (
    <Grid container alignItems='center' justifyContent='space-between' sx={{ width: '100vw', height: '100vh' }}>
      <Grid item xs={12} container sx={{ width: '100%', overflow: 'hidden' }} justifyContent='center' alignItems='center'>
        <Typography>
          {gerado === 'inicial' ? 'gerador de conteúdo' : gerado}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems='center' justifyContent='center' sx={{ width: '100vw' }} >
        <Button onClick={handleConteudo}>
          <Typography>
            gerar conteúdo
          </Typography>
        </Button>
      </Grid>



      <Grid  item container xs={12} alignItems='center' justifyContent='end'>
        <OOLogo />
      </Grid>

    </Grid>




  )
}

export const Sticky = styled('div')(({ bottom, top, index, right }: { bottom?: number, top?: number | string, index: number, right?: number | string }) => ({
  position: 'sticky',
  top: top,
  bottom: bottom,
  left: 0,
  right: right,
  background: 'transparent',
  zIndex: index
}))

export default App
