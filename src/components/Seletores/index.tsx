import { FormControl, InputLabel, Select, MenuItem, ListItemText, SelectChangeEvent } from '@mui/material'

interface Props {
  toggleValue: string
  handleChange: (event: SelectChangeEvent<string>) => void
  filtros: string[]
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
          filtros?.map((filtro, index) => (
            <MenuItem key={index} value={filtro}>
              <ListItemText sx={{ textTransform: 'lowercase' }}>{filtro}</ListItemText>
            </MenuItem>

          ))
        }
      </Select>
    </FormControl>
  )
}