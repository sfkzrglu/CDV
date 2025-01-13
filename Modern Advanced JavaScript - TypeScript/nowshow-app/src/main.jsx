import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { DatabaseProvider } from './Components/Common/DatabaseProvider.jsx'
import { ConfigurationProvider } from './Components/Common/ConfigurationProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <DatabaseProvider>
        <ConfigurationProvider>
          <App />
        </ConfigurationProvider>
      </DatabaseProvider>
    </ChakraProvider>
  </StrictMode>,
)
