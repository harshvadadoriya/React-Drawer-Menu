import React from 'react';
import {
	Box,
	ChakraProvider,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Darkmode from '../Darkmode';
const Drawermenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<ChakraProvider>
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
									<MenuGroup>
										<MenuItem onClick={onClose}>
											<NavLink to="/">Home</NavLink>
										</MenuItem>

										<MenuItem onClick={onClose}>
											<NavLink to="/product-management">
												Product Management
											</NavLink>
										</MenuItem>
										<MenuItem onClick={onClose}>
											<NavLink to="/order-management">Order Management</NavLink>
										</MenuItem>
										<MenuItem onClick={onClose}>
											<NavLink to="/user-management">User Management</NavLink>
										</MenuItem>
									</MenuGroup>
									<MenuDivider />
								</Box>
							</Menu>
						</DrawerBody>
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
