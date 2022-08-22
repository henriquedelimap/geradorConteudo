import { Box, Button, Checkbox, Collapse, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemText, OutlinedInput, Paper, SelectChangeEvent, Stack } from "@mui/material"
import { useState } from "react";
import { MdAdd, MdCreate, MdDelete, MdEdit, MdRemove } from "react-icons/md"
import { GET_FRASES, Query } from "../../API/GET/get.js";
import { SelectFilter } from "../../components/Seletores/index.js";
import { Sticky } from '../../Style/index.js';
import { area, IFrase } from "../lapsoo/index.js";
import { AddForm } from "./Add/index.js";

export const OOTechPage = () => {

  const frasesDB = Query(GET_FRASES)
  console.log(frasesDB);

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
        position: 'relative'
      }}>

      <AddForm />

      <Grid
        item
        xs={12}
        sx={{
          minHeight: '150vh',
        }}>
        <List>
          {
            frasesDB.frases?.slice(1, 40).map((item: IFrase, index: number) => (

              <ListItem
                key={index}
                onClick={handleToggle(index)}
                secondaryAction={
                  <Paper elevation={0} sx={{ display: 'flex', flexDirection: checked.indexOf(index) ? 'row-reverse' : 'row', alignItems: 'center', flexWrap: 'nowrap', height: 44, p: { xs: 1, md: 2, lg: 2 } }}>
                    <Checkbox
                      edge="start"
                      onChange={handleToggle(index)}
                      checked={checked.indexOf(index) !== -1}
                      inputProps={{ 'aria-labelledby': item.quote }}
                    />
                    <Collapse orientation="horizontal" in={checked.indexOf(index) !== -1}>
                      <Paper elevation={checked.indexOf(index) !== -1 ? 1 : 0} sx={{ display: 'flex', flexWrap: 'noWrap' }}>

                        <ListItemButton>

                          <MdRemove />
                        </ListItemButton>
                        <ListItemButton>

                          <MdEdit />
                        </ListItemButton>
                      </Paper>
                    </Collapse>
                  </Paper>
                } >

                <Grid container rowSpacing={2} columnSpacing={4}>
                  <Grid item sx={{ border: '1px solid black' }} >

                    <ListItemText>{item.area}</ListItemText>
                  </Grid>
                  <Grid item sx={{ border: '1px solid black' }} >

                    <ListItemText>{item?.tema}</ListItemText>
                  </Grid>
                  <Grid item sx={{ border: '1px solid black' }} >

                    <ListItemText>{item.quote}</ListItemText>
                  </Grid>

                </Grid>
              </ListItem>
            ))
          }
        </List>
      </Grid >
    </Grid >
  )
}