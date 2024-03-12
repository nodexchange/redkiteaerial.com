import React from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { ContactDialog } from '@/sections/Contact';
import { SheetContext } from '@/components/Sheet';
import { Toggle } from '@radix-ui/react-toggle';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cx, cva } from 'class-variance-authority';
import { RemoveScroll } from 'react-remove-scroll';

const navLinks = [
  // { id: 1, title: "Home", href: "/" },
  { id: 2, title: 'Services', href: '/services' },
  { id: 3, title: 'Pricing', href: '/pricing' },
  { id: 4, title: 'Our Work', href: '/gallery' },
  { id: 4, title: 'Areas We Cover', href: '/areas-we-cover' },
  { id: 5, title: 'Blog', href: '/blog' },
];

const navigationLink = cva(['cursor-pointer'], {
  variants: {
    intent: {
      desktop: [
        'hidden',
        'sm:block',
        'cursor-pointer',
        'py-0.5',
        'px-2',
        'transition',
        'rounded',
        'hover:bg-kite/10',
        'font-medium',
        'focus:bg-kite/10',
        "data-[active='true']:bg-kite",
        "data-[active='true']:text-white",
      ],
      mobile: [
        'inline-flex',
        'items-center',
        'w-full',
        'px-4',
        'py-4',
        'text-3xl',
        'leading-none',
        'text-left',
        'border-b',
        'border-kite-light',
        "data-[active='true']:bg-kite",
      ],
    },
  },
});

const NavigationLink = ({ intent, href, onClick, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <NavigationMenu.Item>
      <Link href={href} passHref legacyBehavior prefetch={false}>
        <NavigationMenu.Link
          data-active={isActive}
          onClick={onClick}
          className={navigationLink({ intent: intent })}>
          {children}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

const Navigation = () => {
  // Contact Dialog
  const { open, setOpen } = React.useContext(SheetContext);
  // Mobile Navigation
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <>
      <ContactDialog open={open} onOpenChange={setOpen} />
      <NavigationMenu.Root>
        <NavigationMenu.List className="pt-4 pb-4 px-4 mx-auto flex items-center justify-center w-full text-md gap-x-2 border-b border-kite-light">
          <NavigationMenu.Item className="mr-auto">
            <Link
              href="/"
              className="font-mtl-bold text-xl"
              legacyBehavior
              passHref
              prefetch={false}>
              <div className="cursor-pointer">
                <NextImage
                  alt="Red Kite Aerial ⌘ - Official Logo showing a drone flying over a house"
                  src="/images/logos/logo.png"
                  width={938}
                  height={96}
                  style={{
                    width: '313px',
                    height: '32px',
                    objectFit: 'contain',
                  }}
                />
              </div>
              {/* <NavigationMenu.Link>Red Kite Aerial</NavigationMenu.Link> */}
            </Link>
          </NavigationMenu.Item>
          {navLinks.map((link) => {
            return (
              <NavigationLink key={link.id} href={link.href} intent="desktop">
                {link.title}
              </NavigationLink>
            );
          })}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className={navigationLink({ intent: 'desktop' })}
              onClick={() => setOpen(true)}>
              Contact
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <a
              aria-label="Chat on WhatsApp"
              target="_blank"
              href="https://wa.me/447500905701"
              title="Chat on WhatsApp"
              className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600">
              <NextImage
                alt="Chat on WhatsApp"
                src="/WhatsAppButtonGreenSmall.png"
                width="140"
                height="32"></NextImage>{' '}
            </a>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="list-none">
            <NavigationMenu.Trigger className="sm:hidden" asChild>
              <Toggle
                pressed={isMobileNavOpen}
                onPressedChange={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                {isMobileNavOpen ? 'Close' : 'Menu'}
              </Toggle>
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <RemoveScroll
          enabled={isMobileNavOpen}
          className={cx(
            'sm:hidden',
            isMobileNavOpen ? 'visible' : 'invisible'
          )}>
          <ul
            className={cx(
              'overflow-y-auto flex flex-col h-screen transition-all absolute w-full pb-8 bg-white',
              isMobileNavOpen ? 'opacity-100' : 'opacity-0'
            )}>
            <NavigationLink
              href="/"
              intent="mobile"
              onClick={() => setIsMobileNavOpen(false)}>
              Home
            </NavigationLink>
            {navLinks.map((link) => {
              return (
                <NavigationLink
                  key={link.id}
                  href={link.href}
                  intent="mobile"
                  onClick={() => setIsMobileNavOpen(false)}>
                  {link.title}
                </NavigationLink>
              );
            })}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                className={navigationLink({ intent: 'mobile' })}
                onClick={() => {
                  setOpen(true);
                }}>
                Contact
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </ul>
        </RemoveScroll>
      </NavigationMenu.Root>
    </>
  );
};

export default Navigation;
