import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import React from 'react'
import { navbarData } from '../../data/navbar'

export default function NavBarComponent() {
  const [open, setOpen] = React.useState(false)

  return (
    <Navbar
      onMenuOpenChange={setOpen}
      maxWidth="full"
    
      className="bg-inherit "
    >
      <NavbarBrand>
        <h3 className='font-extrabold font-english'>Sabri-CH</h3>
      </NavbarBrand>

      <NavbarContent justify="end" className="hidden sm:flex">
        {navbarData.map((item, idx) => (
          <NavbarItem key={idx}>
            <Link href={item.path}>
              <span className="text-primary-500">{idx + 1}</span>.
              <span className="text-foreground font-english">{item.name}</span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenuToggle className="sm:hidden" />
      <NavbarMenu
        className=" overflow-hidden sm:hidden bg-inherit"
        aria-label={open ? 'close' : 'open'}
      >
        {navbarData.map((item, idx) => (
          <NavbarMenuItem key={idx}>
            <Link href={item.path}>
              <span className="text-primary-500">{idx + 1}</span>.
              <span className="text-inherit">{item.name}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
