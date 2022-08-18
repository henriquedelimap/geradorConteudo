import { Button, Grid, IconButton, OutlinedInput, Typography, Stack, Box, Paper, Chip, ToggleButtonGroup, ToggleButton, Select, SelectChangeEvent, MenuItem, ListItemText, FormControl, InputLabel } from '@mui/material'
import styled from "@emotion/styled";
import { MdDone, MdReplay } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { LapsooLogo, OOLogo } from './OOTECHNOLOGY'
import { filtros } from './Data'
import { GenerateButton } from './components/Button';
import { SelectFilter } from './components/Seletores';
import { padronizaTexto } from './Utils'
function App() {
  const [gerado, setGerado] = useState('inicial')
  const [toggleValue, setToggleValue] = useState('')
  const [areaToggleValue, setAreaToggleValue] = useState('')
  const [values, setValues] = useState<string[]>([''])
  const aleatorio = Math.floor(Math.random() * values.length)

  const area = [
    {
      label: 'imobiliária',
    },
    {
      label: 'marketing',
    },
    {
      label: 'arquitetura',
    },
    {
      label: 'saúde',
    },
    {
      label: 'estética',
    },
    {
      label: 'automotiva',
    }
  ]

  
  let match = Object?.keys(filtros)?.find(filtro => filtro === padronizaTexto(areaToggleValue))


  const matchFilter = () => {
    return filtros[`${match}`]
  }

  let filtrosTemas = matchFilter()
  let tema = filtrosTemas?.find((item: any) => item.label === toggleValue)
  let all = !!filtrosTemas ? filtrosTemas[0].quotes : ''


  useEffect(() => {
    toggleValue === tema?.label ? setValues(tema.quotes) : setValues(['algumas funcionalidades estão em fase de desenvolvimento. Selecione uma área e um tema para dar início'])
  }, [toggleValue])

  function handleConteudo() {
    setGerado(prev => prev === values[aleatorio] ? values[aleatorio + 1] : values[aleatorio])
  }
  function handleChange(event: SelectChangeEvent) {
    setToggleValue(event.target.value as string)
  }
  function handleChangeArea(event: SelectChangeEvent) {
    setAreaToggleValue(event.target.value as string)
  }

  return (
    <Box
      sx={{
        position: 'relative'
      }}>
      <Paper
        elevation={4}
        sx={{
          overflow: 'hidden',
          position: 'relative',
          zIndex: '1',
          borderRadius: '0'
        }}>

        <Grid
          container
          alignItems='center'
          justifyContent='space-between'
          sx={{
            width: '100vw',
            height: '100vh'
          }}>

          {/* CONTEÚDO */}

          <Grid
            item
            xs={12}
            container
            sx={{
              width: '100vw',
              height: '50vh',
              overflow: 'hidden'
            }}
            justifyContent='center'
            alignItems='center'
          >
            <Typography
              sx={{
                p: {
                  lg: 2,
                  md: 2,
                  xs: 1
                }
              }}
              align={'center'}
              variant={'h6'}
              fontWeight={300}
              fontFamily='Outfit'
            >
              {
                gerado === 'inicial'
                  ? <LapsooLogo />
                  : gerado === undefined
                    ? '🤖​'
                    : gerado.toLowerCase()}
            </Typography>
          </Grid>

          {/* GERAR CONTEÚDO */}

          <Grid
            item
            container
            direction='row'
            alignItems='start'
            justifyContent='center'
            xs={12}
            sx={{
              height: '50vh',
              pb: 12
            }} >

            <Grid item container alignItems='center' justifyContent='center' xs={12} sx={{ height: '8vh' }}>
              <GenerateButton handleConteudo={handleConteudo} text={'gerar conteúdo'} />
            </Grid>

            <Grid container justifyContent='center' item xs={12} sx={{ height: '15vh', width: '100vw' }}>
              <Stack>
                <SelectFilter toggleValue={areaToggleValue} handleChange={handleChangeArea} filtros={area}
                  selectLabel={'filtrar por área'} />
                {!!filtrosTemas ? <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={filtrosTemas}
                  selectLabel={'filtrar por tema'} /> : ''}
              </Stack>
            </Grid>

          </Grid>

        </Grid>
      </Paper>

      {/* LOGO OOTECHNOLOGY */}

      <Sticky
        bottom={0}
        index={-10}>
        <Paper
          elevation={8}
        >

          <Stack
            justifyContent='center'
            alignItems='center'
            sx={{
              height: '150vh',
              width: '100%'

            }}>
            <OOLogo />
          </Stack>
        </Paper>
      </Sticky>
      <Sticky
        bottom={0}
        index={-15}>
        <Stack
          justifyContent='center'
          alignItems='center'
          sx={{
            height: '35vh',
            width: '100%'

          }}>
          <Typography fontFamily='Outfit'>ajude-nos a expadir o projeto</Typography>
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
