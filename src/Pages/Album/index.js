import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ImageDropZone from "../../component/ImageDropZone";
import CommonDialog from "../../component/CommonDialog";
import FormDialog from "../../component/FormDialog";

const useStyles = theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "70%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
});

const photos = [
  { name: "photo.jpg", url: "https://source.unsplash.com/random" },
  { name: "photo.jpg", url: "https://source.unsplash.com/random" },
  { name: "photo.jpg", url: "https://source.unsplash.com/random" },
  { name: "photo.jpg", url: "https://source.unsplash.com/random" },
  { name: "photo.jpg", url: "https://source.unsplash.com/random" },
  { name: "photo.jpg", url: "https://source.unsplash.com/random" },
  { name: "photo.jpg", url: "https://source.unsplash.com/random" }
];

class Photo extends React.Component {
  state = {
    deletePhotoDialog: false,
    deletePhotoId: "",
    editTitleDialog: false,
    editTitleId: "",
    newTitle: ""
  };

  componentWillMount() {}

  handleDialogClose = name => event => {
    this.setState({ [name]: false });
  };

  handleDeleteAction = event => {
    const { deletePhotoId } = this.state;
    this.setState({ deletePhotoDialog: false });
  };
  handleEditAction = event => {
    const { editTitleId, newTitle } = this.state;
    this.setState({ editTitleDialog: false });
  };

  deleteButtonOnClick = id => event => {
    this.setState({
      deletePhotoId: id,
      deletePhotoDialog: true
    });
  };

  editButtonOnClick = id => event => {
    this.setState({ editTitleDialog: true, editTitleId: id });
  };

  handleTitleOnChange = event => {
    this.setState({ newTitle: event.target.value });
  };
  render() {
    const { classes } = this.props;
    const {
      deletePhotoDialog,
      deletePhotoId,
      editTitleDialog,
      newTitle
    } = this.state;

    return (
      <React.Fragment>
        <ImageDropZone />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={6}>
            {photos.map(photo => (
              <Grid item key={photo.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={photo.url}
                    title={photo.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {photo.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="outlined"
                      onClick={this.editButtonOnClick(photo.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      variant="outlined"
                      onClick={this.deleteButtonOnClick(photo.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <CommonDialog
            open={deletePhotoDialog}
            dialogTitle={"Delete Photo"}
            dialogText={`Are you want to delete ${deletePhotoId} ?`}
            handleDialogClose={this.handleDialogClose("deletePhotoDialog")}
            handleDialogAction={this.handleDeleteAction}
          />
        </Container>
        <FormDialog
          open={editTitleDialog}
          handleDialogClose={this.handleDialogClose("editTitleDialog")}
          dialogTitle={"Edit Photo TItle"}
          dialogText={"Enter new title."}
          handleDialogAction={this.handleEditAction}
          textValue={newTitle}
          textLabel={"title"}
          textOnChange={this.handleTitleOnChange}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Photo);
