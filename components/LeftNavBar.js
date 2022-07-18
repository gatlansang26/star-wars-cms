import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import NextLink from 'next/link'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import BadgeIcon from '@mui/icons-material/Badge';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const menu = [
    {
        text: 'People',
        icon: (<BadgeIcon />),
        href: '/people',
    },
    {
        text: 'Vehicles',
        icon: (<RocketLaunchIcon />),
        href: '/vehicles'
    },
    {
        text: 'Species',
        icon: (<EmojiNatureIcon />),
        href: '/species'
    },
    {
        text: 'Planets',
        icon: (<LanguageIcon />),
        href: '/planets'
    }
];


const LeftNavBar = () => {
    return (
        <div>
            <Toolbar>
                <NextLink href="/people" passHref>
                    <Button variant="text" component="a" disableRipple startIcon={<AutoAwesomeIcon />}>
                        <Typography variant="h6" noWrap component="div">
                            Space Portal
                        </Typography>
                    </Button>
                </NextLink>
            </Toolbar>
            <Divider />
            <List>
                {menu.map((obj) => (
                    <ListItem key={obj.text} disablePadding>
                        <NextLink href={obj.href} passHref>
                            <ListItemButton component="a">
                                <ListItemIcon>{obj.icon}</ListItemIcon>
                                <ListItemText primary={obj.text} />
                            </ListItemButton>
                        </NextLink>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default LeftNavBar;