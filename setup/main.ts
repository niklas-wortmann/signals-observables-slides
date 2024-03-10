import { defineAppSetup } from '@slidev/types'
import OnuUI from 'onu-ui'
import 'onu-ui/dist/style.css'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(OnuUI)
})
