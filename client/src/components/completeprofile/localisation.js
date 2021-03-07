import React, { Component }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleMapReact from 'google-map-react';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';

// const useStyles = makeStyles(theme => ({
//     paper: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '100%'
//     },
//     form: {
//         height: '40vh',
//         width: '100%',
//         marginTop: theme.spacing(2),
//     },
//     submit: {
//         margin: theme.spacing(2, 0, 2),
//         backgroundColor: theme.palette.secondary.main,
//     },
// }));

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Localisation extends Component {
    // const { userL, setLocation, isMarker, handleSubmit } = props;

    // const classes = useStyles();

    // const [marker, setMarker] = useState(userL);

    

// const handleClick = ({ latitude, longitude }) => {
//     setMarker({ latitude, longitude })
//     setLocation({ latitude, longitude });
// },
static defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};
render() {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyBeEUF7eMgjoDA6n4pfupjcBByH11i7yY8'}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}

}

export default Localisation;
