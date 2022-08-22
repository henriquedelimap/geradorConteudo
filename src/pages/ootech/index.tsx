import { Box, Button, Checkbox, Collapse, Divider, Fade, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemText, OutlinedInput, Paper, SelectChangeEvent, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { MdAdd, MdCreate, MdDelete, MdEdit, MdRemove } from "react-icons/md"
import { GET_FRASES, Query } from "../../API/GET/get.js";
import { SelectFilter } from "../../components/Seletores/index.js";
import { Sticky } from '../../Style/index.js';
import { area, IFrase } from "../lapsoo/index.js";
import { AddForm } from "./Add/index.js";

export const OOTechPage = () => {

  const frasesDB = Query(GET_FRASES)

  const [checked, setChecked] = useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <Grid
      container
      sx={{
        width: '100%',
        minHeigth: '100%',
        position: 'relative',
        bgcolor: '#fafafa'
      }}>

      <AddForm />

      <Grid
        item
        xs={12}
        sx={{
          minHeight: '150vh',
        }}>
        <Stack spacing={.8} >
          {
            frasesDB.frases?.slice(-40).reverse().map((item: IFrase, index: number) => (

              <ListItem
                key={index}
                sx={{
                  background: '#ffffff1f',
                  backdropFilter: 'blur(10px)',
                }}
                onClick={handleToggle(index)}>

                <Stack direction='row' sx={{ width: '100%' }}>



                  <Paper elevation={0} sx={{ width: '100%', boxShadow: checked.indexOf(index) !== -1 ? '12px 1px 10px -5px #1f1f1f1f' : '' }}>

                    <Grid container justifyContent='start' sx={{ p: 2 }} gap={{ xs: 0, md: 2, lg: 2 }}>
                      <Grid xs={3} item container  >
                        <Grid item xs={12} md={6} container alignItems='center' justifyContent={{ xs: 'start', md: 'center', lg: 'center' }}>

                          <Typography variant={'body2'} >

                            {item.area}
                          </Typography>

                        </Grid>
                        <Grid item xs={12} md={6} container alignItems='center' justifyContent={{ xs: 'start', md: 'center', lg: 'center' }}>

                          <Typography variant={'body2'} >
                            {item?.tema}
                          </Typography>

                        </Grid>
                      </Grid>

                      <Grid xs={9} md={7} item sx={{ p: 4 }} >
                        <Typography variant={'body1'} noWrap={checked.indexOf(index) !== -1 ? false : true} >
                          {item.quote}
                        </Typography>
                      </Grid>

                    </Grid>
                  </Paper>
                  <Stack sx={{ display: checked.indexOf(index) !== -1 ? 'flex' : 'none' }}>


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


                        <ListItemButton >

                          <MdRemove color='white' fontSize='24' />
                        </ListItemButton>
                        <ListItemButton>

                          <MdEdit color='white' fontSize='18' />
                        </ListItemButton>
                      </Stack>
                    </Fade>
                  </Stack>

                </Stack>
              </ListItem>
            ))
          }
        </Stack >
      </Grid >
    </Grid >
  )
}