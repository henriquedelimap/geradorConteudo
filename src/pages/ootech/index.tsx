import { Box, Button, Checkbox, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemText, OutlinedInput, SelectChangeEvent, Stack } from "@mui/material"
import { useState } from "react";
import { MdCreate } from "react-icons/md"
import { GET_FRASES, Query } from "../../API/GET/get.js";
import { SelectFilter } from "../../components/Seletores/index.js";
import { Sticky } from '../../Style/index.js';
import { area, IFrase } from "../lapsoo/index.js";

export const OOTechPage = () => {

  const frasesDB = Query(GET_FRASES)
  console.log(frasesDB);


  const [toggleValue, setToggleValue] = useState('')
  const [areaToggleValue, setAreaToggleValue] = useState('')
  const [checked, setChecked] = useState([1]);
  function handleChange(event: SelectChangeEvent) {
    setToggleValue(event.target.value as string)
  }
  function handleChangeArea(event: SelectChangeEvent) {
    setAreaToggleValue(event.target.value as string)
  }
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
    <Grid container sx={{ width: '100%', minHeigth: '100%', position: 'relative' }}>
      <Grid
        item
        container
        alignItems='end'
        justifyContent='center'
        sx={{
          height: '50vh',
          width: '98vw',
          zIndex: 1000,
          position: 'sticky',
          top: -340,
          background: 'rgba(232, 245, 255, 0.07)',
          backdropFilter: 'blur(32px)',
          boxShadow: '0px 12px 8px -20px #111111'
        }} xs={12}>

        <Grid container item xs={5.5} alignItems='center' sx={{ p: .8 }} justifyContent='end' direction='row'>
          <Stack sx={{ width: '24vw' }} direction='row' spacing={.8}>

            <SelectFilter toggleValue={areaToggleValue} handleChange={handleChangeArea} filtros={area}
              selectLabel={'filtrar por área'} />
            <SelectFilter toggleValue={toggleValue} handleChange={handleChange} filtros={area}
              selectLabel={'filtrar por tema'} />
          </Stack>
        </Grid>
        <Grid container justifyContent='start' rowSpacing={2.4} sx={{ p: .8 }} item xs={6.5}>

          <FormControl sx={{ width: '32vw', height: 44 }}>
            <InputLabel size='small' >insira uma nova frase</InputLabel>
            <OutlinedInput label="insira uma nova frase" size='small' sx={{ borderRadius: '1rem', height: 44 }} endAdornment={<Button>
              <MdCreate />
            </Button>} />
          </FormControl>

        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ minHeight: '150vh', overflow: 'hidden' }}>
        <List>
          {
            frasesDB.frases?.map((item: IFrase) => (

              <ListItem secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(Number(item.id))}
                  checked={checked.indexOf(Number(item.id)) !== -1}
                  inputProps={{ 'aria-labelledby': item.quote }}
                />} >
                <ListItemButton>
                  <ListItemText>{item.quote}</ListItemText>
                </ListItemButton>
              </ListItem>

            ))
          }

          {
            frasesDB.frases?.map((item: IFrase) => item.quote)
          }
        </List>
      </Grid>
    </Grid >
  )
}