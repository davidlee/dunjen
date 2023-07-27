import React, {useState, useEffect} from 'react'
import {Text, Box} from 'ink'

// This may be useful for processing user input
//
// import useStdin from 'ink';
// const {stdin} = useStdin();

const width = 120
const height = 40

type Props = {
  readonly name: string | undefined
}

function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((previousCounter) => previousCounter + 1)
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <Text color="green">tick, tock ... {counter}</Text>
}

export default function App({}: Props) {
  // ...

  return (
    <Box
      key="app-wrapper"
      flexDirection="column"
      flexWrap="wrap"
      height={height}
    >
      {Array.from({length: height}, (_, y) => (
        <Box key={'y-' + y}>
          {Array.from({length: width}, (_, x) => (
            <Text key={y + ',' + x}>.</Text>
          ))}
        </Box>
      ))}
      <Counter />
    </Box>
  )
}
