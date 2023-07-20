import React from 'react';
import {Text, Box} from 'ink';

const width : number = 120;
const height : number = 40;

type Props = {
	name: string | undefined;
};

export default function App({}: Props) {
  // ...
  
	return (
		<Box key="foo" flexDirection="column" flexWrap="wrap" height={height}>
      {Array.from({ length: height }, (_, y) => (
        <Box key={'y-'+y}>
          {Array.from({ length: width }, (_, x) => (
            <Text key={y + ',' + x}>.</Text>
          ))}
        </Box>
      ))}
    </Box>
	);
}

