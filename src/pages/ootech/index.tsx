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