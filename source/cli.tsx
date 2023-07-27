#!/usr/bin/env node
import React from 'react'
import {render} from 'ink'
import meow from 'meow'
import App from './app.jsx'

const cli = meow(
  `
	Usage
	  $ dunjen

	Options
		--name  Your name

	Examples
	  $ dunjen --name=Jane
	  Hello, Jane
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
      },
    },
  },
)

render(<App name={cli.flags.name} />)
