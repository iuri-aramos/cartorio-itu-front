import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Box,
  makeStyles,
  Button,
  Link,
} from "@material-ui/core";

import HouseTwoToneIcon from "@material-ui/icons/HouseTwoTone";
import BusinessTwoToneIcon from "@material-ui/icons/BusinessTwoTone";
import FileCopyTwoToneIcon from "@material-ui/icons/FileCopyTwoTone";
import { Line } from "./Line";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  cardMain: {
    width: "350px",
    [theme.breakpoints.down("md")]: {
      margin: "10px",
    },
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
    display: "flex",
    alignItems: "center",
  },
  cardIcon: {
    display: "flex",
    justifyContent: "center",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardButton: {
    marginBottom: "10px",
  },
}));

const tiers = [
  {
    operation: "Registro de Imóveis",
    iconType: "House",
    links: [
      { buttonDescription: "Tabela de Custas", link: "/1" },
      { buttonDescription: "Informações", link: "/2" },
      { buttonDescription: "Solicitar", link: "/3" },
    ],
  },
  {
    operation: "Civil de Pessoas Jurídicas",
    iconType: "JuridicPersion",
    links: [
      { buttonDescription: "Tabela de Custas", link: "/1" },
      { buttonDescription: "Informações", link: "/2" },
      { buttonDescription: "Solicitar", link: "/3" },
    ],
  },
  {
    operation: "Títulos e Documentos",
    iconType: "Titles&Docs",
    links: [
      { buttonDescription: "Tabela de Custas", link: "/1" },
      { buttonDescription: "Informações", link: "/2" },
      { buttonDescription: "Solicitar", link: "/3" },
    ],
  },
];

function renderIcon(iconType: String) {
  switch (iconType) {
    case "House":
      return <HouseTwoToneIcon style={{ fontSize: 100 }} />;
    case "JuridicPersion":
      return <BusinessTwoToneIcon style={{ fontSize: 100 }} />;
    case "Titles&Docs":
      return <FileCopyTwoToneIcon style={{ fontSize: 100 }} />;
    default:
      return <HouseTwoToneIcon style={{ fontSize: 100 }} />;
  }
}

export default function Main() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.main} component="main">
        <Box
          component="section"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          {tiers.map((tier) => (
            <Card className={classes.cardMain}>
              <CardHeader
                title={tier.operation}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent className={classes.cardIcon}>
                {renderIcon(tier.iconType)}
              </CardContent>
              <CardActions disableSpacing className={classes.cardActions}>
                {tier.links.map((link) => {
                  return (
                    <Button
                      className={classes.cardButton}
                      variant="outlined"
                      color="primary"
                    >
                      <Link href={link.link} color="inherit" variant="button">
                        {link.buttonDescription}
                      </Link>
                    </Button>
                  );
                })}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
      <Line />
    </div>
  );
}
