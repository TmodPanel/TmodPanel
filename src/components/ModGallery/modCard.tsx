import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';

function ModCard() {
  return (
    <Card style={{ height: '250px',position:'relative' }}>
      <CardActionArea>
        <Typography gutterBottom component="div" style={{margin:'10px 0 0 10px'}}>
          <Link href="#">灾厄（Calamity Mod (No Calamity Music)）</Link>
        </Typography>

        <CardMedia
          component="img"
          height="80px"
          width="80px"
          image="https://i.imgur.com/ePz4Jfn.png"
          style={{ objectFit: 'contain' }}
        />

        <CardContent >
          <Typography variant="body2" color="textSecondary" component="p">
          v1.5.1.6 (37.4 MB)
            <br />
            Fabsol and the Dev Team
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{position:'absolute',bottom:'0',width:'100%'}}>
        <Button size="small" color="primary">
          Download
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function ModCard2() {
  return (
    <Card style={{ height: '250px',position:'relative' }}>
      <CardActionArea>
        <Typography gutterBottom component="div" style={{margin:'10px 0 0 10px'}}>
          <Link href="#">灾厄（Calamity Mod (No Calamity Music)）</Link>
        </Typography>

        <CardMedia
          component="img"
          height="80px"
          width="80px"
          image="https://i.imgur.com/ePz4Jfn.png"
          style={{ objectFit: 'contain' }}
        />

        <CardContent >
          <Typography variant="body2" color="textSecondary" component="p">
          v1.5.1.6 (37.4 MB)
            <br />
            Fabsol and the Dev Team
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{position:'absolute',bottom:'0',width:'100%'}}>
        <Button size="small" color="primary">
          Download
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export { ModCard, ModCard2 };

export default ModCard;
