import { Button, Grid, IconButton, OutlinedInput, Typography, Stack, Box, Paper, Chip, ToggleButtonGroup, ToggleButton, Select, SelectChangeEvent, MenuItem, ListItemText, FormControl, InputLabel, Collapse, Fade, Slide, CircularProgress } from '@mui/material'
import styled from "@emotion/styled";
import { MdDone, MdReplay } from 'react-icons/md'
import { useEffect, useState } from 'react'

import { Sticky } from '../../Style/index.js';
import { GET_FRASES, Query } from '../../API/GET/get.js'
import { LapsooLogo, OOLogo } from '../../OOTECHNOLOGY'
import { GenerateButton } from './Button';
import { SelectFilter } from '../../components/Seletores';
import { useQuery } from '@apollo/client';
import { IFrase } from '../../Type/index.js';



export const LapsooPage = () => {

    const [gerado, setGerado] = useState<IFrase | null>(null)
    const [temaValue, setTemaValue] = useState('')
    const [areaValue, setAreaValue] = useState('')
    const [openLogin, setOpenLogin] = useState(false)
    const link = `https://www.instagram.com/lapsootechnology/`

    const filtraReapetidos = (arr: string[]) => {
        return arr?.filter((este, i) => arr.indexOf(este) === i)
    }

    const { loading, error, data } = useQuery(GET_FRASES)
    if (loading) {
        return <Stack alignItems='center' justifyContent='center' sx={{ width: '100vw', height: '100vh' }}>
            <CircularProgress />
        </Stack>
    }
    if (error) {
        return <p>erro :/</p>
    }

    let total = data?.frases?.map((item: IFrase) => item).filter((i: IFrase) => i)

    let areas = filtraReapetidos(data?.frases?.map((item: IFrase) => item.area))

    let itemXarea = data?.frases?.map((item: IFrase) => item.area === areaValue ? item : '').filter((i: any) => i)

    let temas = filtraReapetidos(itemXarea?.map((item: IFrase) => item.tema))

    let itemXtema = data?.frases?.map((item: IFrase) => item.tema === temaValue ? item : '').filter((i: any) => i)

    let exibeValor = areaValue != '' && temaValue != ''
        ? itemXtema
        : areaValue != ''
            ? itemXarea
            : total


    const aleatorio = Math.floor(Math.random() * exibeValor?.length)

    function handleConteudo() {

        setGerado(prev => prev === exibeValor[aleatorio] ? exibeValor[aleatorio + 1] : areaValue === '' ? total[aleatorio] : exibeValor[aleatorio])
    }

    function handleChange(event: SelectChangeEvent) {
        setTemaValue(event.target.value as string)
    }
    function handleChangeArea(event: SelectChangeEvent) {
        setAreaValue(event.target.value as string)
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
                    zIndex: '100',
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
                                gerado === null
                                    ? <LapsooLogo />
                                    : gerado === undefined
                                        ? '🤖​'
                                        : gerado.quote.toLowerCase()
                            }
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
                            <Stack spacing={3.2} sx={{ minWidth: '12rem' }}>
                                <SelectFilter toggleValue={areaValue} handleChange={handleChangeArea} filtros={areas}
                                    selectLabel={'filtrar por área'} />
                                {!!areaValue ? <SelectFilter toggleValue={temaValue} handleChange={handleChange} filtros={temas}
                                    selectLabel={'filtrar por tema'} /> : ''}
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            {/* FOOTER */}

            <Sticky
                bottom={0}
                index={1}>
                <Paper
                    elevation={8}
                >
                    <Grid container
                        alignItems='center'
                        sx={{
                            minHeight: '28vh',
                            width: '100%',
                            p: 2

                        }}>

                        {/* LOGIN */}

                        <Grid item container justifyContent='center' xs={6}>
                            <Button onClick={() => setOpenLogin(!openLogin)} >
                                <Typography sx={{ textTransform: 'lowercase' }} fontFamily='Outfit'>login</Typography>
                            </Button>
                        </Grid>

                        {/* CONTRIBUIR */}

                        <Grid item container justifyContent='center' xs={6}>
                            <Button href={link}>
                                <Typography sx={{ textTransform: 'lowercase' }} noWrap align='right' fontFamily='Outfit'>contribuir</Typography>
                            </Button>
                        </Grid>
                        <Grid sx={{ overflow: 'hidden', height: '6vh' }} item container justifyContent='center' xs={12}>


                            <Collapse in={openLogin}>
                                <Slide in={openLogin} direction='down'>


                                    <Paper
                                        elevation={0}
                                        sx={{ zIndex: 100, }}
                                    >
                                        <Grid container
                                            alignItems='center'
                                            columnSpacing={2}
                                            sx={{
                                                height: '6vh',
                                                p: 0
                                            }}>
                                            <Grid item>

                                                <OutlinedInput size='small'></OutlinedInput>
                                            </Grid>
                                            <Grid item>

                                                <OutlinedInput size='small'></OutlinedInput>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Slide>
                            </Collapse>


                        </Grid>
                        <Grid item container justifyContent='center' xs={12}>
                            <OOLogo />
                        </Grid>

                    </Grid>
                </Paper>
            </Sticky>


        </Box >
    )
}
