import { Button, Grid, IconButton, OutlinedInput, Typography, Stack, Box, Paper, Chip, ToggleButtonGroup, ToggleButton } from '@mui/material'
import styled from "@emotion/styled";
import { MdDone, MdReplay } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { LapsooLogo, OOLogo } from './OOTECHNOLOGY'
import { ape, casa, financiamento, institucional, lote } from './Data'
function App() {
  const [gerado, setGerado] = useState('inicial')
  const [toggleValue, setToggleValue] = useState('')
  const [values, setValues] = useState<string[]>([''])
  const aleatorio = Math.floor(Math.random() * values.length)

  const filtros = ['todos','financiamento', 'institucional', 'lote', 'casa', 'ape']

  useEffect(() => {
    const totalValues = [...ape, ...institucional, ...casa, ...lote]
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
  function handleChange(event: React.MouseEvent<HTMLElement>, toggleValue: string) {
    setToggleValue(toggleValue)
  }

  return (
    <Box
      sx={{
        position: 'relative'
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

            <Grid item>

              <Button onClick={handleConteudo}>
                <Typography fontFamily='Outfit'>
                  gerar conteúdo
                </Typography>
              </Button>
            </Grid>

            <Grid item>
              <ToggleButtonGroup
                value={toggleValue}
                exclusive
                size="small"
                onChange={handleChange}
              >
                {
                  filtros.map(filtro => (
                    <ToggleButton value={filtro}>
                      <Typography sx={{textTransform: 'lowercase'}}>{filtro}</Typography>
                    </ToggleButton>

                  ))
                }

              </ToggleButtonGroup>
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
