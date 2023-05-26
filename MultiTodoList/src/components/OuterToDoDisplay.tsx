import { Box, Paper } from '@mui/material'
import React from 'react'
import OuterToDo from './OuterToDo'
import { outerToDo } from '../model'

interface Props {
    outerToDo: outerToDo
}
  

const OuterToDoDisplay: React.FC<Props> = ({outerToDo}) => {
  return (
    <Box>
        <Paper variant="outlined" elevation={3} square>
            <OuterToDo outerToDo={outerToDo}/>
           
        </Paper>
    </Box>
  )
}

export default OuterToDoDisplay