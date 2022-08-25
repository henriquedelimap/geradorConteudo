import { useQuery } from "@apollo/client";
import { Box, Button, Checkbox, CircularProgress, Collapse, Divider, Fade, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemText, OutlinedInput, Paper, SelectChangeEvent, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { MdAdd, MdCreate, MdDelete, MdEdit, MdRemove } from "react-icons/md"
import { GET_FRASES, Query } from "../../API/GET/get.js";
import { SelectFilter } from "../../components/Seletores/index.js";
import { Sticky } from '../../Style/index.js';
import { IFrase } from "../../Type/index.js";
import { filtraReapetidos } from "../common/index.js";
import { AddForm } from "./Add/index.js";
import { Item } from "./Item/index.js";

export const OOTechPage = () => {
  const [envio, setEnvio] = useState(false)
  const [checked, setChecked] = useState([9999]);



  const { loading, error, data } = useQuery(GET_FRASES)

  const [inputValue, setInputValue] = useState('')
  const [toggleValue, setToggleValue] = useState('')
  const [areaToggleValue, setAreaToggleValue] = useState('')


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

  let itemXarea = data?.frases?.map((item: IFrase) => item.area).filter((i: any) => i)

  let temas = filtraReapetidos(itemXarea?.map((item: IFrase) => item.tema))

  let itemXtema = data?.frases?.map((item: IFrase) => item.tema).filter((i: any) => i)


  let exibeValor = areaToggleValue != '' && toggleValue != ''
    ? itemXtema
    : areaToggleValue != ''
      ? itemXarea
      : total

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
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

      <AddForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        toggleValue={toggleValue}
        setToggleValue={setToggleValue}
        areaToggleValue={areaToggleValue}
        setAreaToggleValue={setAreaToggleValue}
        total={total}
        areas={areas}
        itemXarea={itemXarea}
        temas={temas}
        itemXtema={itemXtema}
        envio={envio}
        setEnvio={setEnvio} />
      <Grid
        item
        xs={12}
        sx={{
          minHeight: '150vh',
        }}>
        <Stack spacing={.8} sx={{ p: { xs: .5, md: 2, lg: 2 } }} >
          {
            data.frases?.slice(-40).reverse().map((item: IFrase, index: number) => (
              <Item key={item.myId} handleToggle={handleToggle} index={index} checked={checked} item={item} />
            ))
          }
        </Stack >
      </Grid >
    </Grid >
  )
}