import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav
        className='p-4 flex justify-between'
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <ul className='flex gap-4'>
          <a className='active' href='/'>
            Home
          </a>
          <a href='#news'>News</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
        </ul>

        <div style={{ position: 'relative' }}>
          <a
            href='/'
            className='switch-mode'
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none',
            }}
            data-testid='toggle-theme-btn'
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </a>
        </div>
      </nav>
    </div>
  );
}
