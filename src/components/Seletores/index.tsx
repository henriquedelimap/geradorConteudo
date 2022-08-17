import {FormControl, InputLabel, Select, MenuItem, ListItemText, SelectChangeEvent} from '@mui/material'

interface Props {
    toggleValue: string
    handleChange: (event: SelectChangeEvent<string>) => void
    filtros: {
        label: string
        length?: string | number
    }[]
    selectLabel: string
}
export const SelectFilter = ({toggleValue, handleChange, filtros, selectLabel}: Props) => {
    return (
        <FormControl sx={{ width: 320, height: '12vh' }}>
                <InputLabel id='select' sx={{ top: -6 }}>{selectLabel}</InputLabel>
                <Select
                  id='select'
                  value={toggleValue}
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