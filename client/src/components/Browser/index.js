import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as Core from '@material-ui/core';
import * as Icons from '@material-ui/icons';
// import Navbar from './navbar';
import Cards from "../Cards/index";
import Select from 'react-select';

const useStyles = makeStyles(theme => ({
    card: {
        border: '2px solid',
        borderColor: '#0000',
        // backgroundColor: "red"
    },
    rating:{
        maxWidth: "300px",
        marginRight: "30px",
        marginLeft: "30px"
    },
    submit: {
        // margin: theme.spacing(3, 0, 2),
        width:250,
        margin: "auto",
        background: "linear-gradient(30deg, #34ada4 10%, #0b777d 90%)",
        "&:hover": {
          background: "linear-gradient(30deg, #0b777d 10%, #34ada4 90%)",
      },
    },
      root: {
        //   paddingLeft:"9%",
        //   paddingTop:"0",
        // display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent : 'center',
        // justifyContent: 'space-evently',
        // overflow: 'hidden',
        // backgroundColor: "#000000",
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
      },
    slider:{
        //backgroundColor:"#174f70",
        color:"#174f70",
    },
    arrow:{
        //backgroundColor:"#174f70",
        color:"#11888e",
    },
    content: {
        // backgroundColor: "red",
        [theme.breakpoints.down(1024 + theme.spacing(3) * 2)]: {
            // marginTop: theme.spacing(8),
            // marginBottom: theme.spacing(6),
            // padding: theme.spacing(3),
            marginBottom : "70px"
          },

    }
}));

const Browse=(props) => {
    const classes = useStyles();
    const {users, handleChangeAge,handleChangeLoc,handleChangeRating
        ,handleChangeNbrTags,age,nbrTags,loc,rating, handleSubmit, handle, handleLike, handleDislike, handleReport, handleBlock, handleViewProfile, handleChangeTags, selectTags} = props;

    const marks = [
        {value: 0,label: '0'},{value: 0.5,label: '0.5'},{value: 1,label: '1'},{value: 1.5,label: '1.5'},
        {value: 2,label: '2'},{value: 2.5,label: '2.5'},{value: 3,label: '3'},{value: 3.5,label: '3.5'},
        {value: 4,label: '4'},{value: 4.5,label: '4.5'},{value: 5,label: '5'},
      ];
      const marksTags = [
        {value: 0,label: '0'},{value: 1,label: '1'},{value: 2,label: '2'},
        {value: 3,label: '3'},{value: 4,label: '4'},{value: 5,label: '5'}
      ];
      const customStyles = {
        control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? "black" : "gray",
            boxShadow: state.isFocused ? null : null,
          }),
        menu: base => ({
            ...base,
            borderRadius: 0,
            marginTop: 0,
            backgroundColor: '#DBDFF',
          }),
        menuList: base => ({
            ...base,
            padding: 0,
            height: '90px',
            zIndex: '100',
            backgroundColor: "white",
            overflowY: 'scroll'
          }),
      };
    // console.log(users.users)
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
    //   ];

    // const ratingmarks = [
    //     {value: 0,label: '0'},{value: 0.5,label: '0.5'},{value: 1,label: '1'},{value: 1.5,label: '1.5'},
    //     {value: 2,label: '2'},{value: 2.5,label: '2.5'},{value: 3,label: '3'},{value: 3.5,label: '3.5'},
    //     {value: 4,label: '4'},{value: 4.5,label: '4.5'},{value: 5,label: '5'},
    //   ];

    return (
        <>
        <Core.Card className={classes.card}>
             <Core.CardContent className={classes.content}>
                <Core.Grid container item justify="center" style={{marginTop: "2%"}}>
                    <Core.Grid item xs={6} className={classes.rating}>
                    <Core.Typography id="range-slider1" gutterBottom align="center">
                        Rating
                    </Core.Typography>
                    <Core.Tooltip title ="DESC"><Core.IconButton  aria-label="View"  onClick={(e) => handle("-rating")}>
                        <Icons.KeyboardArrowDown className={classes.arrow}/>
                    </Core.IconButton></Core.Tooltip>
                    <Core.Tooltip title ="ASC"><Core.IconButton aria-label="View"  onClick={(e) => handle("rating")}>
                        <Icons.ExpandLess className={classes.arrow}/>
                    </Core.IconButton></Core.Tooltip>
                    <Core.Slider className={classes.slider}
                        // value={rating}
                        value={rating}
                        onChange={handleChangeRating}
                        defaultValue={30}
                        // onChange={handleChangeRating}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        step={0.5}
                        marks={marks}
                        min={0}
                        max={5}
                    /> 
                    </Core.Grid>
                    <Core.Grid item xs={6} className={classes.rating}>
                    <Core.Typography id="range-slider1" gutterBottom align="center">
                        Age
                    </Core.Typography>
                    <Core.Tooltip title ="DESC"><Core.IconButton aria-label="View"  onClick={(e) => handle("-age")}>
                        <Icons.KeyboardArrowDown className={classes.arrow}/>
                    </Core.IconButton></Core.Tooltip>
                    <Core.Tooltip title ="ASC"><Core.IconButton aria-label="View"  onClick={(e) => handle("age")}>
                        <Icons.ExpandLess  className={classes.arrow}/>
                    </Core.IconButton></Core.Tooltip>
                    <Core.Slider className={classes.slider}
                        // value={rating}
                        value={age}
                        onChange={handleChangeAge}
                        // onChange={handleChangeRating}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        step={1}
                        // marks={marks}
                        min={18}
                        max={120}
                    /> 
                    </Core.Grid>
                    <Core.Grid item xs={6} className={classes.rating}>
                    <Core.Typography id="range-slider1" gutterBottom align="center">
                        Localisation
                    </Core.Typography>
                    <Core.Tooltip title ="DESC"><Core.IconButton aria-label="View"  onClick={(e) => handle("-distance")}>
                        <Icons.KeyboardArrowDown className={classes.arrow}/>
                    </Core.IconButton></Core.Tooltip>
                    <Core.Tooltip title ="ASC"><Core.IconButton aria-label="View"  onClick={(e) => handle("distance")}>
                        <Icons.ExpandLess  className={classes.arrow}/>
                    </Core.IconButton></Core.Tooltip>
                    <Core.Slider className={classes.slider}
                        // value={rating}
                        value={loc}
                        onChange={handleChangeLoc}
                        // onChange={handleChangeRating}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        step={50}
                        // marks={marks}
                        min={0}
                        max={1000}
                    /> 
                    </Core.Grid>
                    <Core.Grid item xs={6} className={classes.rating}>
                    <Core.Typography id="range-slider1" gutterBottom align="center">
                        Common tags
                    </Core.Typography>
                    <Core.Tooltip title ="DESC"><Core.IconButton aria-label="View"  onClick={(e) => handle("-nbrTags")}>
                        <Icons.KeyboardArrowDown className={classes.arrow}/>
                    </Core.IconButton></Core.Tooltip>
                    <Core.Tooltip title ="ASC"><Core.IconButton aria-label="View"  onClick={(e) => handle("nbrTags")}>
                        <Icons.ExpandLess  className={classes.arrow}/>
                    </Core.IconButton></Core.Tooltip>
                    <Core.Slider className={classes.slider}
                        // value={rating}
                        value={nbrTags}
                        onChange={handleChangeNbrTags}
                        // onChange={handleChangeRating}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        step={1}
                        marks={marksTags}
                        min={0}
                        max={5}
                    /> 
                    </Core.Grid>
                    <Core.Grid item xs={6} className={classes.rating}>
                        <div className={classes.margin} />
                        <Core.Typography id="range-slider5" gutterBottom align="center">
                            Tags
                        </Core.Typography>
                        <Select
                            isMulti
                            isClearable={false}
                            onChange={handleChangeTags}
                            options={selectTags}
                            styles={customStyles}
                        />
                        </Core.Grid>
                </Core.Grid>
             </Core.CardContent>
             <Core.CardActions>
                <Core.Button type="submit" color="primary" className={classes.submit} onClick={handleSubmit} fullWidth variant="contained" >Filter</Core.Button>
            </Core.CardActions>
        </Core.Card>
        <Core.Grid item sm={12} style={{ height: 50 }}></Core.Grid>
        <div className={classes.root}>
                <div className={classes.root}>
                  {users.status === 'success' ? users.users.map((user, i) => (<Cards key={i} user={user}  handleLike={handleLike} handleDislike= {handleDislike} handleBlock={handleBlock} handleReport={handleReport} handleViewProfile={handleViewProfile}/>)) : ''}
                </div>
        </div>
            </>
    )
}
export default Browse;