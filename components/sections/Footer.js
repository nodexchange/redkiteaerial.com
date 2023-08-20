import splitbee from '@splitbee/web';
import NextImage from 'next/image';

const Footer = () => {
  const footerLinks = [
    // {
    //   href: "https://www.twitter.com/redkiteaerial",
    //   text: "Twitter",
    // },
    //
    // {
    //   href: "https://500px.com/redkiteaerial",
    //   text: "500px",
    // },
    {
      href: 'https://www.instagram.com/redkiteaerial',
      text: 'Instagram',
    },
    {
      href: 'mailto:redkiteaerial@outlook.com',
      text: 'Mail',
    },
  ];

  const Item = ({ href, children }) => (
    <li className="underline underline-offset-2">
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </li>
  );

  return (
    <footer className="relative flex flex-col px-6 py-6 text-sm border-t md:text-lg border-kite-light md:px-4">
      <ul className="flex gap-x-2">
        {footerLinks.map((link, index) => (
          <Item key={index} href={link.href}>
            {link.text}
          </Item>
        ))}
        <li className="underline underline-offset-2">
        <a
              aria-label="Chat on WhatsApp"
              target="_blank"
              href="https://wa.me/447500905701"
              title="Chat on WhatsApp"
              className="flex text-sm text-gray-800 transition-all duration-200 hover:text-opacity-70 focus:text-blue-600">
              <NextImage
                alt="Chat on WhatsApp"
                src="/WhatsAppButtonGreenSmall.png"
                width="120"
                height="28"></NextImage>{' '}
            </a>
            </li>
      </ul>
      <div className="mt-4 text-xs max-w-prose text-kite-blue">
        ©Red Kite Aerial ⌘ - All Rights Reserved - 2023. <br /> Registered in
        England and Wales. Website created by{' '}
        <a href="https://alyssacreative.co.uk/">AS Creative</a>. Hosted by{' '}
        <a href="https://www.vercel.com/">Vercel</a>.
      </div>
    </footer>
  );
};

export default Footer;
