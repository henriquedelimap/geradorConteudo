import { Button, Grid, IconButton, OutlinedInput, Typography, Stack, Box, Paper } from '@mui/material'
import styled from "@emotion/styled";
import {MdReplay} from 'react-icons/md'
import { useEffect, useState } from 'react'
import { LapsooLogo, OOLogo } from './OOTECHNOLOGY'
function App() {
  const [gerado, setGerado] = useState('inicial')
  const [value, setValue] = useState([
    'CET(custo efetivo total)', 
    'taxa de corretagem', 
    'Escritura pública', 
    'Resgistro de imóveis',
    'ITBI',
    'IPTU',
    'Taxa de cessão de contrato',
    'Taxas cartóriais',
    'Taxa cobrada durante a obra',
    'Análise documental',
    'Financiamento reprovado?',
    'Autônomo pode financiar?',
    'Composição de renda'
  ])
  						
  const aleatorio = Math.floor(Math.random() * value.length)
  
  
  function handleConteudo() {
    setGerado(prev => prev === value[aleatorio] ? value[aleatorio + 1] : value[aleatorio])
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Paper elevation={12} sx={{ position: 'relative', zIndex: '1', borderRadius: '0' }}>


        <Grid container alignItems='center' justifyContent='space-between' sx={{ width: '100vw', height: '100vh' }}>

          <Grid item xs={12} container sx={{ width: '100vw', height: '50vh', overflow: 'hidden' }} justifyContent='center' alignItems='center'>
            <Typography variant={'h6'} fontWeight={300} fontFamily='Outfit'>
              {gerado === 'inicial' ? <LapsooLogo /> : gerado === undefined ? '🤖​' : gerado}
            </Typography>
          </Grid>

          <Grid item container xs={12} alignItems='center' justifyContent='center' sx={{height: '50vh' }} >
            <Button onClick={handleConteudo}>
              <Typography fontFamily='Outfit'>
                gerar conteúdo
              </Typography>
            </Button>
          </Grid>

        </Grid>
      </Paper>
      <Sticky bottom={0} index={-10}>

        <Stack justifyContent='center' alignItems='center' sx={{ height: '40vh', width: '100%' }}>
          <OOLogo />
        </Stack>

      </Sticky>
    </Box>



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
