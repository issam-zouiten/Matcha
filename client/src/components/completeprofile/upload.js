import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddAPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
// import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles(theme => ({
  card: {
   height :150,
    position : 'center',
  },
  upload: {
    color: "#11878D",
    // backgroundImage: "linear-gradient(15deg, #174F70 30%, #11878D 70%)",
  },
  input: {
    display: 'none',
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: theme.palette.secondary.main,
}, root: {
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',
  padding: "2%",
  marginBottom : "3%",
},
gridList: {

  // backgroundColor: "red",
  width: 200,
  height: 220,
  marginRight: "20px!important",
  marginBottom: "20px!important",
  justifyContent: "center",
  alignContent : "center",
  alignItems: 'center',
  display: 'flex',
  // flexWrap: 'wrap',
  overflow: 'hidden',
  boxShadow : "10px",
},
titleBar: {
  background:
    'linear-gradient(to top, rgba(0,0,0,0.6) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
},
delete : {
  background : 'none'
},
add : {
  display: 'none',
},
machiroot: {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflow: "hidden",
}
}));
const calcImages = (images) =>{
  let len = 0;
  if(images != null){
    len = images.length;
    if(len > 4){
      return false;
    }
  }
  return true;
  
}

const  Photos = (props) => {
  const {fileChangedHandler,images,deletePicture,setProfilePicture} = props;
  const classes = useStyles();
  return (
    <Container>
    <CssBaseline />
      <Grid container  justify="center">
       <div className={calcImages(images.images) === false ? classes.add : ''}>
         <input accept="image/*" className={classes.input} id="icon-button-file" type="file"  onChange={fileChangedHandler}/>
         <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <AddAPhotoIcon className={classes.upload} style={{fontSize : 70}}/>
          </IconButton>
        </label>
        </div>
      
      </Grid>
          <div className={classes.root} style={{display: "flex", flexDirection: "wrap" }}>
              {images.isImages  && images.images.map((tile) => {
                return (
                  <div  key={tile.id}className={classes.machiroot} style={{display: "flex", flexDirection: "wrap" }}>
                <GridList cellHeight={300} className={classes.gridList}>
                  <GridListTile   style={{width: "100%", height: "100%", margin : "10px"}}>
                    <img src={`http://localhost:3001/${tile.path}`} alt='photos' />
                    <GridListTileBar
                      actionPosition="left"
                      className={classes.delete}
                      title={tile.isProfilePic === 1 && 'Profile picture'}
                      actionIcon={
                        <Tooltip title ="set profile pic"><IconButton aria-label="profilePic"  onClick={(e) => setProfilePicture(tile.id)}>
                          <CheckCircleSharpIcon  color="secondary"/>
                        </IconButton></Tooltip>
                        
                      }
                    />
                    <GridListTileBar
                      className={classes.delete}
                      titlePosition="top"
                      actionIcon={
                        images.images.length > 1 &&
                        <Tooltip title ="delete pic"><IconButton aria-label="deletePic"  onClick={(e) => deletePicture(tile.id,tile.isProfilePic)}>
                          <DeleteForeverSharpIcon  color="secondary"/>
                        </IconButton></Tooltip>  
                        
                      }
                    />
                  </GridListTile> 
                  </GridList>
                  </div>
                )}
              )}
          
            
          </div>
    </Container>
  )
}
  
export default Photos;