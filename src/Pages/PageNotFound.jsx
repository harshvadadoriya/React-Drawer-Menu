import { Box, Button, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const PageNotFound = () => {
	return (
		<>
			<center>
				<Box
					width={10 / 12}
					textAlign={'justify'}
					justifyContent={'center'}
					display={'flex'}
				>
					<Text>Page Not Found</Text>
				</Box>
				<Spacer mt={'2'} />
				<Stack direction="row" display={'flex'} justifyContent={'center'}>
					<Button colorScheme="teal" variant="solid">
						Go Back
					</Button>
				</Stack>
			</center>
		</>
	);
};

export default PageNotFound;
