import React from "react";
import {
  Header,
  Button,
  Image,
  Segment,
  Grid,
  Divider,
  Icon,
  Reveal
} from "semantic-ui-react";
import imagenSinAcceso from "../../assets/NoAcceso.png";
import { useAuth0 } from "@auth0/auth0-react";

const NoAutorizado = () => {
  const { user, logout, getIdTokenClaims } = useAuth0();

  const SERVICIO_DE_SOLICITAR_ACCESO_NAHUAL =
    process.env.REACT_APP_SOLICITAR_ACCESO_URL;

  const DOMINIO = process.env.REACT_APP_DOMINIO;

  const obtenerTokenId = async () => {
    const claims = await getIdTokenClaims();
    return claims.__raw;
  };

  const generarLink = async () => {
    var url = new URL(SERVICIO_DE_SOLICITAR_ACCESO_NAHUAL);
    var parametros = url.searchParams;
    parametros.set("token", await obtenerTokenId());
    parametros.set("redirect", DOMINIO);
    url.search = parametros.toString();
    return url.toString();
  };

  const redireccionarSolicitarAcceso = async () => {
    window.location.assign(await generarLink());
  };

  return (
    <>
      <Grid centered>
        <Reveal animated="small fade" instant>
          <Reveal.Content visible>
            <Image circular size="small" src={user.picture} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image size="tiny" src={imagenSinAcceso} />
          </Reveal.Content>
        </Reveal>
      </Grid>
      <Header
        style={{ marginTop: "45px" }}
        textAlign="center"
        as="h2"
        content={user.name}
        subheader="No tienes acceso para ingresar a esta página, tienes la siguientes opciones:"
      />
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Ó</Divider>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="sign out" />
                Cambiar a una cuenta con acceso
              </Header>
              <Button onClick={() => logout()} color="grey">
                Cerrar Sesión
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="unlock" />
                Solicitar Acceso
              </Header>
              <Button onClick={() => redireccionarSolicitarAcceso()}>
                Solicitar
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default NoAutorizado;
