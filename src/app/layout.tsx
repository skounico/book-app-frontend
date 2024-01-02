import type { Metadata } from 'next'
import '../../styles/global.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import PersistentDrawerLeft from './ClientSideComponent';



export const metadata: Metadata = {
  title: 'MyShelf',
  description: 'Book Management System',
}

const DRAWER_WIDTH = 240;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
          <PersistentDrawerLeft>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                ml: `${DRAWER_WIDTH}px`,
                mt: ['48px', '56px', '64px'],
                p: 3,
              }}
            >
              {children}
            </Box>
          </PersistentDrawerLeft>
          
      </body>
    </html>
  )
}
