#!/usr/bin/env node

import registerCreateCommand from './create'
import registerPublishCommand from './publish'
import CAC from 'cac'

const { version } = require('../package.json')

const cli = CAC('koishi-scripts').help().version(version)

registerCreateCommand(cli)
registerPublishCommand(cli)

cli.parse()

if (!cli.matchedCommand) {
  cli.outputHelp()
}