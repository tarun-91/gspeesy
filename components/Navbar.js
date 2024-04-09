import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronRightIcon } from '@heroicons/react/solid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faTwitter,
//   faInstagram,
//   faGithub
// } from '@fortawesome/free-brands-svg-icons';

const navigation = [
  { name: 'Company', href: '/' },
  { name: 'Getting Started', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Contact', href: '/test' }
];
 
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo.svg"
                      alt="Logo"
                      width={160}
                      height={29}
                    />
                  </a>
                </Link>

                <div className="hidden md:flex h-full pl-8">
                  {navigation.map(({ name, href }) => (
                    <Link href={href} key={name}>
                      <a className="inline-flex items-center px-5 py-2 font-medium text-sm text-black hover:text-gray-500 duration-300">
                        <span>{name}</span>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex">
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-600 duration-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:flex items-center">
                  <Link href="/test">
                    <a className="w-full inline-flex items-center justify-center px-12 py-3 bg-black hover:bg-white hover:text-black border-2 border-black text-white rounded-full font-medium text-sm duration-300">
                      <span>Sign Up</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden border-t-2 border-zinc-200">
            <div className="px-10 py-8 space-y-8">
              {navigation.map(({ name, href }) => (
                <Link href={href} key={name}>
                  <Disclosure.Button
                    as="a"
                    className="group flex justify-between cursor-pointer"
                  >
                    <span className="font-medium text-sm text-black hover:text-gray-500 duration-300 group-hover:translate-x-2 duration-300">
                      {name}
                    </span>
                    {/* <ChevronRightIcon className="text-zinc-400 group-hover:text-zinc-600 block h-7 w-7 duration-300" /> */}
                  </Disclosure.Button>
                </Link>
              ))}

              <div className="py-2">
                <Link href="/test">
                  <a className="w-full inline-flex items-center justify-center px-12 py-3 bg-black hover:bg-white hover:text-black border-2 border-black text-white rounded-full font-medium text-sm duration-300">
                    <span>Sign Up</span>
                  </a>
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
