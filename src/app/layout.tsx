import type { Metadata } from 'next'
import Link from 'next/link'
import '../../styles/global.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';

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
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <Typography variant="h6" color="text.primary">
                My Shelf
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: ['48px', '56px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
          <Divider />
            <List>
                <ListItem key={"/"} disablePadding>
                  <ListItemButton component={Link} href={"/"}>
                    <ListItemIcon>
                      <PlaylistAddTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Registrar Livro"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key={"/book-shelf"} disablePadding>
                  <ListItemButton component={Link} href={"/book-shelf"}>
                    <ListItemIcon>
                      <AutoStoriesTwoToneIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Book Shelf"} />
                  </ListItemButton>
                </ListItem>
            </List>
          <Divider sx={{ mt: 'auto' }} />
          </Drawer>
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
        {/* <div className='bg-red-300'>
          <h1>Teste</h1>
          <Link href="/" className='px-4'>Home</Link>
          <Link href="/dashboard" className='px-4'>Dashboard</Link>
          <Link href="/auth/signin" className='px-4'>Sign In</Link>
          <Link href="/book-shelf" className='px-4'>Book Shelf</Link>
        </div>
        {children} */}
      </body>
    </html>
  )
}
