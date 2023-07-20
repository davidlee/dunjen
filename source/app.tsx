import React from 'react';
import {Text, Box} from 'ink';

const width : number = 120;
const height : number = 100;

type Props = {
	name: string | undefined;
};

export default function App({}: Props) {
  let grid : String[][] = [];
  let y, x : number;

  for(y = 0; y < height; y++) {
    let row : String[] = [];
    grid.push(row);
    // row.push(<Box>);  
    for(x = 0; x < width; x++) {
      row.push('.');
    }
    // row.push(</Box>);
  }
	return (
		<Box>{grid.map( e => <Text>{e}</Text>)}</Box>
	);
}

