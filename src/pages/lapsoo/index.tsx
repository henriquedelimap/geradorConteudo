import { Button, Grid, IconButton, OutlinedInput, Typography, Stack, Box, Paper, Chip, ToggleButtonGroup, ToggleButton, Select, SelectChangeEvent, MenuItem, ListItemText, FormControl, InputLabel, Collapse, Fade, Slide } from '@mui/material'
import styled from "@emotion/styled";
import { MdDone, MdReplay } from 'react-icons/md'
import { useEffect, useState } from 'react'

import { Sticky } from '../../Style/index.js';
import { GET_FRASES, Query } from '../../API/GET/get.js'
import { LapsooLogo, OOLogo } from '../../OOTECHNOLOGY'
import { filtros } from '../../Data'
import { GenerateButton } from './Button';
import { SelectFilter } from '../../components/Seletores';
import { padronizaTexto } from '../../Utils'


export interface IFrase {
    tema: string;
    id: number | string | null
    area: string
    quote: string
}

export const area = [
    {
        label: 'imobiliária',
    },
    {
        label: 'marketing',
    },
    // {
    //   label: 'arquitetura',
    // },
    // {
    //   label: 'saúde',
    // },
    // {
    //   label: 'estética',
    // },
    // {
    //   label: 'automotiva',
    // }
]

export const LapsooPage = () => {
    const frasesDB = Query(GET_FRASES)

    // console.log(frasesDB.frases?.map((item: IFrase) => item.quote));

    const [gerado, setGerado] = useState('inicial')
    const [toggleValue, setToggleValue] = useState('')
    const [areaToggleValue, setAreaToggleValue] = useState('')
    const [values, setValues] = useState<string[]>([''])
    const [openLogin, setOpenLogin] = useState(false)
    const aleatorio = Math.floor(Math.random() * values.length)
    const link = `https://www.instagram.com/lapsootechnology/`



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
                            <Stack spacing={3.2} sx={{ minWidth: '12rem' }}>
                                <SelectFilter toggleValue={areaToggleValue} handleChange={handleChangeArea} filtros={area}
                                    selectLabel={'filtrar por área'} />
                                {!!filtrosTemas ? <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={filtrosTemas}
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
