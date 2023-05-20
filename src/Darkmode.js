import react from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Darkmode = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<header className="darkmodebtn">
				<IconButton isRound="true" size="md" onClick={toggleColorMode}>
					{colorMode === 'light' ? <FaMoon /> : <FaSun />}
				</IconButton>
			</header>
		</>
	);
};

export default Darkmode;
