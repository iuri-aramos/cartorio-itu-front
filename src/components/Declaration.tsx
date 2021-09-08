import { Container, makeStyles, Typography } from "@material-ui/core";
import assinatura from "../assets/assinatura.png";
import { Line } from "./Line";
const useStyles = makeStyles((theme) => ({
  general: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  image: {
    display: "flex",
    flexDirection: "row-reverse",
  },
}));
export default function Declaration() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.general}>
        <Typography variant="body1">
          A Palavra da Oficial Recebi em 1983 a delegação para o Oficio de
          Registro de Imóveis e seus anexos, de Títulos e Documentos, Registro
          Civil de Pessoas Jurídicas e Protesto de Letras e Títulos da Comarca
          de Itu/SP. Mesmo já conhecendo o trabalho foi um desafio. Naquele
          tempo a Lei n° 6015/73 de Registro Públicos com apenas 7 (sete) anos
          de vigência, era uma criança. Havia também novidades no
          desenvolvimento urbanístico do país com a recém inaugurada Lei do
          Parcelamento do Solo Urbano (Lei n° 6766 de 1979) e a Lei do Divórcio
          (Lei n° 6515/77) a refletir as transformações sociais. Alguns anos
          mais tarde as mudanças culminaram com a solidificação do Estado
          Brasileiro através da promulgação da Constituição Federal de 1988.
          Tivemos que estudar e nos adaptar, todas estas inovações não cabiam no
          velho sistema, era hora de se arriscar e inovar, Microfilmagem de
          Documentos, Sistema de Processamento de Dados, Digitalização de
          Arquivos, lá fomos nós rumo a revolução tecnológica. Aqui estamos nós;
          uma equipe de profissionais trabalhando e servindo em conjunto para
          agilidade e segurança de seus negócios, em prol do desenvolvimento da
          Nação Brasileira.
        </Typography>
        <Typography variant="body1" align="right">
          A Oficial,
        </Typography>
        <div className={classes.image}>
          <img src={assinatura} alt="Assinatura da Oficial" />
        </div>
      </Container>
      <Line />
    </div>
  );
}
