import React from 'react'
import Logo from '@/components/util/logo'
import { Button } from '../ui/button'
import { ProfileDropdownMenu } from './nav-dropdown-menu'
import { LanguageDropdownMenu } from './language-menu'

const Navbar = () => {
  return (
    <div className='h-[var(--h-nav)] flex items-center'>
      <Logo />
      <div className='ml-auto flex gap-2'>
        <Button variant="secondary" className='h-[var(--h-button)] w-24 rounded-full'>Donate</Button>
        <LanguageDropdownMenu />
        <ProfileDropdownMenu />
      </div>
    </div>
  )
}

export default Navbar;