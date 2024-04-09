import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footerlink = [ 
    { name: 'Company', href: '/' },
    { name: 'Getting Started', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Contact', href: '/test' }
  ];
const Termslink = [
    { name: 'Licensing', href: '/' },
    { name: 'Privacy Policy', href: '/' },
    { name: ' Terms & conditions', href: '/' },
    { name: 'Cookie policy', href: '/' }
  ];
   
export default function Navbar() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="md:flex justify-between items-center py-10 md:py-8">
                <div className="footer-logo">
                    <Link href="/">
                    <a className='flex'>
                        <Image src="/images/logo.svg"
                        alt="Logo"
                        width={160}
                        height={29}
                        />
                    </a>
                    </Link>
                </div>
                <div className='footer-link'>
                    {Footerlink.map(({ name, href }) => (
                        <Link href={href} key={name}>
                            <a className="inline-flex items-center px-5 font-medium text-sm text-black hover:text-gray-500 duration-300">
                            <span>{name}</span>
                            </a>
                        </Link>
                    ))}
                </div>
                <div className='footer-social-icon'>
                    <Link href="/">
                        <a>
                            <FontAwesomeIcon icon={faInstagram} className='px-3 text-xl text-orange' /> 
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <FontAwesomeIcon icon={faTwitter} className='px-3 text-xl text-orange' />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <FontAwesomeIcon icon={faLinkedin} className='px-3 text-xl text-orange' />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="md:flex justify-between items-center py-4 border border-slate-200 border-t-1 border-l-0 border-r-0 border-b-0">
                <p className='font-medium text-sm text-slate-500'>© GSpeedy, LLC. All rights reserved.</p>
                <div className='footer-link'>
                    {Termslink.map(({ name, href }) => (
                        <Link href={href} key={name}>
                            <a className="inline-flex items-center px-5 font-medium text-sm text-slate-500 hover:text-gray-700 duration-300">
                            <span>{name}</span>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}