'use client'

import { GlobalStyle, normalTheme } from '@/styles'
import { ThemeProvider } from 'styled-components'

const CustomTheme = ({ children }) => {
  return (
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default CustomTheme
