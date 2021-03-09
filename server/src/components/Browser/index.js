import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import * as Core from '@material-ui/core';
// import * as Icons from '@material-ui/icons';
// import Cards from "../Cards";

// const useStyles = makeStyles(theme => ({
//     card: {
//         border: '2px solid',
//         borderColor: '#0000',
//     },
//     rating: {
//         maxWidth: "300px",
//         marginRight: "30px",
//         marginLeft: "30px"
//     },
//     submit: {
//         width: 250,
//         margin: "auto",
//         backgroundColor: "#11888e"
//     },
//     root: {
//                 justifyContent: 'center',
//         alignItems: 'center',
//         alignContent: 'center',
//         display: 'flex',
//         flexWrap: 'wrap',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//     },
//     slider: {
//         color: "#174f70",
//     },
//     arrow: {
//         color: "#11888e",
//     },
// }));

const Browse = () => {
    // const classes = useStyles();

    // const images = [
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://images.pexels.com/photos/6401614/pexels-photo-6401614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40",
    //     "https://images.pexels.com/photos/6507482/pexels-photo-6507482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    // ];

    return (
        <>
            {/* <Core.Card className={classes.card}>
                <Core.CardContent>
                    <Core.Grid container item justify="center">
                        <Core.Grid item xs={6} className={classes.rating}>
                            <Core.Typography id="range-slider1" gutterBottom align="center">
                                Rating
                    </Core.Typography>
                            <Core.Tooltip title="DESC"><Core.IconButton>
                                <Icons.KeyboardArrowDown className={classes.arrow} />
                            </Core.IconButton></Core.Tooltip>
                            <Core.Tooltip title="ASC"><Core.IconButton>
                                <Icons.ExpandLess className={classes.arrow} />
                            </Core.IconButton></Core.Tooltip>
                            <Core.Slider className={classes.slider}
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                step={0.2}
                                min={0}
                                max={5}
                            />
                        </Core.Grid>
                        <Core.Grid item xs={6} className={classes.rating}>
                            <Core.Typography id="range-slider1" gutterBottom align="center">
                                Age
                    </Core.Typography>
                            <Core.Tooltip title="DESC"><Core.IconButton>
                                <Icons.KeyboardArrowDown className={classes.arrow} />
                            </Core.IconButton></Core.Tooltip>
                            <Core.Tooltip title="ASC"><Core.IconButton>
                                <Icons.ExpandLess className={classes.arrow} />
                            </Core.IconButton></Core.Tooltip>
                            <Core.Slider className={classes.slider}
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                step={1}
                                min={16}
                                max={80}
                            />
                        </Core.Grid>
                        <Core.Grid item xs={6} className={classes.rating}>
                            <Core.Typography id="range-slider1" gutterBottom align="center">
                                Localisation
                    </Core.Typography>
                            <Core.Tooltip title="DESC"><Core.IconButton>
                                <Icons.KeyboardArrowDown className={classes.arrow} />
                            </Core.IconButton></Core.Tooltip>
                            <Core.Tooltip title="ASC"><Core.IconButton>
                                <Icons.ExpandLess className={classes.arrow} />
                            </Core.IconButton></Core.Tooltip>
                            <Core.Slider className={classes.slider}
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                step={100}
                                min={0}
                                max={1000}
                            />
                        </Core.Grid>
                        <Core.Grid item xs={6} className={classes.rating}>
                            <Core.Typography id="range-slider1" gutterBottom align="center">
                                Common tags
                    </Core.Typography>
                            <Core.Tooltip title="DESC"><Core.IconButton>
                                <Icons.KeyboardArrowDown className={classes.arrow} />
                            </Core.IconButton></Core.Tooltip>
                            <Core.Tooltip title="ASC"><Core.IconButton>
                                <Icons.ExpandLess className={classes.arrow} />
                            </Core.IconButton></Core.Tooltip>
                            <Core.Slider className={classes.slider}
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                step={1}
                                min={0}
                                max={5}
                            />
                        </Core.Grid>
                    </Core.Grid>
                </Core.CardContent>
                <Core.CardActions>
                    <Core.Button type="submit" color="primary" className={classes.submit} fullWidth variant="contained" >Filter</Core.Button>
                </Core.CardActions>
            </Core.Card>
            <Core.Grid item sm={12} style={{ height: 50 }}></Core.Grid>
            <div className={classes.root}>
                <div className={classes.root}>
                    {images.map((img) => (<Cards image={img} />))}
                </div>
            </div> */}
            hello
        </>
    )
}
export default Browse;