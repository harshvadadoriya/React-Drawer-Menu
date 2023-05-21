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
								<Box>
									<MenuGroup>
										<NavLink to="/">
											<MenuItem onClick={onClose}>Home</MenuItem>
										</NavLink>
										<NavLink to="/product-management">
											<MenuItem onClick={onClose}>Product Management</MenuItem>
										</NavLink>
										<NavLink to="/order-management">
											<MenuItem onClick={onClose}>Order Management</MenuItem>
										</NavLink>
										<NavLink to="/user-management">
											<MenuItem onClick={onClose}>User Management</MenuItem>
										</NavLink>
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
