import React from 'react';
import {
    Box, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar
} from '@mui/material';
import Typography from '@mui/material/Typography';

const DynamicDetails = ({ data, details }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '45%', mb: 2 }}>
                <List>
                    {details.map((detail, index) => {
                        if (detail.isTitle) {
                            return(
                                <Typography key={index} variant="h5" sx={{ p: 2 }} noWrap component="div">
                                    {data.name}
                                </Typography>
                            )
                        }
                        return (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar>{detail.icon}</Avatar>
                                </ListItemAvatar>
                                <ListItemText secondary={detail.label} primary={data[detail.id]} />
                            </ListItem>
                        );
                    })}
                </List>
            </Paper>
        </Box>
    );
};

export default DynamicDetails;
