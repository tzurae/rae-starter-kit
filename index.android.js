import index from './src/mobile/index'
import Reactotron from 'reactotron-react-native'

Reactotron
  .configure()
  .connect()

index('android')
