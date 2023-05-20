import React from 'react';
import {
	Box,
	Stack,
	ChakraProvider,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Spacer,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	IconButton,
	MenuDivider,
} from '@chakra-ui/react';
import { AddIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Darkmode from '../Darkmode';
const Drawermenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<ChakraProvider>
			{/* 	<div className="container-fluid">
				<div className="row" className="ms-1">
					<Button m={5} ref={btnRef} colorScheme="teal" onClick={onOpen}>
						<HamburgerIcon />
					</Button>
				</div>
			</div> */}
			<Box p={6}>
				<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
					<HamburgerIcon />
				</Button>

				<Drawer
					isOpen={isOpen}
					placement="left"
					onClose={onClose}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Dashboard</DrawerHeader>
						<DrawerBody>
							<MenuDivider />
							<Menu>
								{/* <MenuDivider /> */}
								<Box>
									<MenuGroup title="Pages">
										<MenuItem onClick={onClose}>
											<NavLink to="/">Home</NavLink>
										</MenuItem>

										<MenuItem onClick={onClose}>
											<NavLink to="/about">About</NavLink>
										</MenuItem>
										<MenuItem onClick={onClose}>
											<NavLink to="/projects">Projects</NavLink>
										</MenuItem>
										<MenuItem onClick={onClose}>
											<NavLink to="/skills">Skills</NavLink>
										</MenuItem>
										<MenuItem onClick={onClose}>
											<NavLink to="/contact">Contact</NavLink>
										</MenuItem>
									</MenuGroup>
									<MenuDivider />
									<MenuGroup title="Help">
										<MenuItem>Docs</MenuItem>
										<MenuItem>FAQ</MenuItem>
									</MenuGroup>
								</Box>
							</Menu>
						</DrawerBody>
						{/* <DrawerBody>
							<Input placeholder="Type here..." />
						</DrawerBody> */}
						<DrawerFooter>
							<Box>
								<Button mr={4} colorScheme="teal" variant="outline">
									Log in
								</Button>

								<Button colorScheme="teal" variant="outline">
									Sign in
								</Button>
							</Box>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</Box>
			<Darkmode />
		</ChakraProvider>
	);
};

export default Drawermenu;
