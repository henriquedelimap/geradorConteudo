import { Box, Button, Checkbox, Collapse, Divider, Fade, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemText, OutlinedInput, Paper, SelectChangeEvent, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { MdAdd, MdCreate, MdDelete, MdEdit, MdRemove } from "react-icons/md"
import { GET_FRASES, Query } from "../../API/GET/get.js";
import { SelectFilter } from "../../components/Seletores/index.js";
import { Sticky } from '../../Style/index.js';
import { IFrase } from "../../Type/index.js";
import { AddForm } from "./Add/index.js";
import { Item } from "./Item/index.js";

export const OOTechPage = () => {
  const [envio, setEnvio] = useState(false)

  let frasesDB = Query(GET_FRASES)

  const [checked, setChecked] = useState([9999]);

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

      <AddForm envio={envio} setEnvio={setEnvio} />

      <Grid
        item
        xs={12}
        sx={{
          minHeight: '150vh',
        }}>
        <Stack spacing={.8} sx={{ p: { xs: .5, md: 2, lg: 2 } }} >
          {
            frasesDB.frases?.slice(-40).reverse().map((item: IFrase, index: number) => (

              <Item key={item.myId} handleToggle={handleToggle} index={index} checked={checked} item={item} />
            ))
          }
        </Stack >
      </Grid >
    </Grid >
  )
}