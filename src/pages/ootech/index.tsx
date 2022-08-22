import { Box, Button, Checkbox, Collapse, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemText, OutlinedInput, SelectChangeEvent, Stack } from "@mui/material"
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
            frasesDB.frases?.map((item: IFrase, index: number) => (

              <ListItem
                key={index}
                onClick={handleToggle(index)}
                secondaryAction={
                  <Stack direction='row' alignItems='center'>
                    <Checkbox
                      edge="start"
                      onChange={handleToggle(index)}
                      checked={checked.indexOf(index) !== -1}
                      inputProps={{ 'aria-labelledby': item.quote }}
                    />
                    <Collapse orientation='horizontal' in={checked.indexOf(index) !== -1}>
                      <IconButton>

                        <MdRemove />
                      </IconButton>
                      <IconButton>

                        <MdEdit />
                      </IconButton>
                    </Collapse>
                  </Stack>
                } >
                { }
                <ListItemButton>
                  <ListItemText>{item.area}</ListItemText>
                  <ListItemText>{item?.tema}</ListItemText>
                  <ListItemText>{item.quote}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Grid >
    </Grid >
  )
}