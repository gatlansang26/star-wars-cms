import React from 'react';
import DynamicDetails from '../../components/DynamicDetails';
import PublicIcon from '@mui/icons-material/Public';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import StraightenIcon from '@mui/icons-material/Straighten';
import AirIcon from '@mui/icons-material/Air';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TerrainIcon from '@mui/icons-material/Terrain';
import WaterIcon from '@mui/icons-material/Water';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const getStaticPaths = async () => {
    const URL = process.env.API_URL + process.env.PLANETS_ENTITY;
    const res = await fetch(URL);
    const data = await res.json();

    const paths = data.results.map(planet => {
        return {
            params: {id: planet.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const URL = process.env.API_URL + process.env.PLANETS_ENTITY;
    const id = context.params.id;
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();

    return {
        props: {data: data}
    }
}

const PlanetDetails = ({ data }) => {
    const details = [
        {
            id: 'name',
            label: 'Name',
            icon: (<PublicIcon/>),
            isTitle: true
        },
        {
            id: 'rotation_period',
            label: 'Rotation Period',
            icon: (<ThreeSixtyIcon/>)
        },
        {
            id: 'orbital_period',
            label: 'Orbital Period',
            icon: (<SettingsBackupRestoreIcon/>)
        },
        {
            id: 'diameter',
            label: 'Diameter',
            icon: (<StraightenIcon/>)
        },
        {
            id: 'climate',
            label: 'Climate',
            icon: (<AirIcon/>)
        },
        {
            id: 'gravity',
            label: 'Gravity',
            icon: (<ArrowDownwardIcon/>)
        },
        {
            id: 'terrain',
            label: 'Terrain',
            icon: (<TerrainIcon/>)
        },
        {
            id: 'surface_water',
            label: 'Surface Water',
            icon: (<WaterIcon/>)
        },
        {
            id: 'population',
            label: 'Population',
            icon: (<PeopleAltIcon/>)
        }
    ];

    return (
        <>
            <DynamicDetails data={data.results} details={details} />
        </>
    );
};

export default PlanetDetails;
