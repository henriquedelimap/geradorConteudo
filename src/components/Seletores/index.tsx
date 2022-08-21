import { FormControl, InputLabel, Select, MenuItem, ListItemText, SelectChangeEvent } from '@mui/material'

interface Props {
  toggleValue: string
  handleChange: (event: SelectChangeEvent<string>) => void
  filtros: {
    label: string
    length?: string | number
  }[]
  selectLabel: string
  height?: string
}
export const SelectFilter = ({ toggleValue, handleChange, filtros, selectLabel, height }: Props) => {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '100%', lg: 320 } }}>
      <InputLabel size='small' id='select' >{selectLabel}</InputLabel>
      <Select
        id='select'
        value={toggleValue}
        label={selectLabel}
        sx={{ borderRadius: '1rem', height: 44 }}
        onChange={handleChange}
      >
        {
          filtros?.map(filtro => (
            <MenuItem value={filtro.label}>
              <ListItemText sx={{ textTransform: 'lowercase' }}>{filtro.label}  {!!filtro.length ? (`(${filtro.length})`) : ''}</ListItemText>
            </MenuItem>

          ))
        }
      </Select>
    </FormControl>
  )
}