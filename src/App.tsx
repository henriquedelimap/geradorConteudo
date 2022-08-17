import { Button, Grid, IconButton, OutlinedInput, Typography, Stack, Box, Paper, Chip, ToggleButtonGroup, ToggleButton, Select, SelectChangeEvent, MenuItem, ListItemText, FormControl, InputLabel } from '@mui/material'
import styled from "@emotion/styled";
import { MdDone, MdReplay } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { LapsooLogo, OOLogo } from './OOTECHNOLOGY'
import { ape, casa, financiamento, institucional, lote } from './Data'
import { GenerateButton } from './components/Button';
import { SelectFilter } from './components/Seletores';
function App() {
  const [gerado, setGerado] = useState('inicial')
  const [toggleValue, setToggleValue] = useState('')
  const [areaToggleValue, setAreaToggleValue] = useState('')
  const [values, setValues] = useState<string[]>([''])
  const aleatorio = Math.floor(Math.random() * values.length)
  const totalValues = [...ape, ...institucional, ...casa, ...lote]

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

  const filtros = [
    {
      imobiliaria: [{
        label: 'todos',
        length: totalValues.length
      },
      {
        label: 'financiamento',
        length: financiamento.length
      },
      {
        label: 'institucional',
        length: institucional.length
      },
      {
        label: 'lote',
        length: lote.length
      },
      {
        label: 'casa',
        length: casa.length
      },
      {
        label: 'ape',
        length: ape.length
      }],
      marketing: [{
        label: 'todos',
      },
      {
        label: 'marketing digital',
      }],
      arquitetura: [{
        label: 'todos',
      },
      {
        label: 'paisagismo',
      },
      {
        label: 'interiores',
      }],
      saude: [{
        label: 'todos',
      },
      {
        label: 'odontologia',
      },
      {
        label: 'psicologia',
      }],
      estetica: [{
        label: 'todos',
      },
      {
        label: 'limpeza de pele',
      },
      {
        label: 'procedimentos',
      }],
      automotiva: [{
        label: 'todos',
      },
      {
        label: 'revisão',
      },
      {
        label: 'dicas',
      }],
    }
  ]

  useEffect(() => {
    switch (toggleValue) {
      case 'todos':
        setValues(totalValues)
        break;
      case 'financiamento':
        setValues(financiamento)
        break;

      case 'institucional':
        setValues(institucional)
        break;

      case 'ape':
        setValues(ape)
        break;

      case 'casa':
        setValues(casa)
        break;

      case 'lote':
        setValues(lote)
        break;
      default:
        setValues(totalValues)
        break;
    }
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
  console.log(filtros.map(item => item.imobiliaria)[0]);
  
  return (
    <Box
      sx={{
        position: 'relative', overflow: 'hidden'
      }}>
      <Paper
        elevation={12}
        sx={{
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
            direction='column'
            xs={12}
            alignItems='center'
            justifyContent='space-evenly'
            sx={{
              height: '50vh',
              pb: 16
            }} >

            <Grid item sx={{ height: '15vh' }}>

              <GenerateButton handleConteudo={handleConteudo} text={'gerar conteúdo'} />
            </Grid>

            <Grid item sx={{ height: '15vh' }}>
              <Stack>


                <SelectFilter toggleValue={areaToggleValue} handleChange={handleChangeArea} filtros={area}
                  selectLabel={'filtrar por área'} />
                {areaToggleValue === 'imobiliária'
                  ? <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={filtros.map(item => item.imobiliaria)[0]} selectLabel={'filtrar por tema'} />
                  : areaToggleValue === 'marketing'
                    ? <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={filtros.map(item => item.marketing)[0]} selectLabel={'filtrar por tema'} />
                    : areaToggleValue === 'arquitetura'
                      ? <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={filtros.map(item => item.arquitetura)[0]} selectLabel={'filtrar por tema'} />
                      : areaToggleValue === 'saúde'
                        ? <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={filtros.map(item => item.saude)[0]} selectLabel={'filtrar por tema'} />
                        : areaToggleValue === 'estética'
                          ? <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={filtros.map(item => item.estetica)[0]} selectLabel={'filtrar por tema'} />
                          : areaToggleValue === 'automotiva'
                            ? <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={filtros.map(item => item.automotiva)[0]} selectLabel={'filtrar por tema'} />
                            : ''}




              </Stack>
            </Grid>

          </Grid>

        </Grid>
      </Paper>

      {/* LOGO OOTECHNOLOGY */}

      <Sticky
        bottom={0}
        index={-10}>
        <Stack
          justifyContent='center'
          alignItems='center'
          sx={{
            height: '50vh',
            width: '100%'

          }}>
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
