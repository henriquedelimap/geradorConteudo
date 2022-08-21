import { FormControl, InputLabel, OutlinedInput } from "@mui/material"

export const InAdd = () => {
    return (
        <FormControl sx={{ height: 44, width: '100%' }}>
            <InputLabel size='small' >sugestão</InputLabel>
            <OutlinedInput
                label="sugestão"
                size='small'
                sx={{
                    borderRadius: '1rem',
                    height: 44
                }} />
        </FormControl>
    )
}