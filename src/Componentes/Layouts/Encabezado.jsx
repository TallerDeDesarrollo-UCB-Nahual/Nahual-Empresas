import React from "react";
import NahualLogo from "../../assets/logo-proyecto-nahual.webp";
import { useAuth0 } from "@auth0/auth0-react";

import {
	Container,
	Menu,
	Segment,
	Visibility,
	Image,
	Header,
	Responsive
} from "semantic-ui-react";
import BotonIniciarSesion from "../Login/BotonIniciarSesion";
import BotonCerrarSesion from "../Login/BotonCerrarSesion";

function Encabezado() {

	const { user, isAuthenticated } = useAuth0();
	return (
		<>
		{console.log(isAuthenticated)}
			<Visibility once={false}>
				<Responsive maxWidth={767}>
					<Segment vertical style={{ height: "11rem" }}></Segment>
				</Responsive>
				<Responsive minWidth={768}>
					<Segment vertical style={{ height: "7rem" }}></Segment>
				</Responsive>
				<Menu stackable fixed="top">
					<Container>
						<Menu.Item>
							<Image rounded size={"small"} src={NahualLogo} />
						</Menu.Item>
						{isAuthenticated ? (
							<>
								<Menu.Item position="right">
									<Header
										color="grey"
										as="h2"
										icon="graduation"
										content="Lista de Egresades"
									/>
								</Menu.Item>
                <Menu.Item>
								<Image
									src={user.picture}
									avatar
								/>
								<span>{user.name}</span>
                </Menu.Item>
								<Menu.Item>
									<BotonCerrarSesion />
								</Menu.Item>
                
							</>
						) : (
							<>
								<Menu.Item position="right">
									<Header
										color="grey"
										as="h2"
										icon="graduation"
										content="Bienvenido"
									/>
								</Menu.Item>

								<Menu.Item>
									<BotonIniciarSesion />
								</Menu.Item>
							</>
						)}
					</Container>
				</Menu>
			</Visibility>
		</>
	);
}

export default Encabezado;
