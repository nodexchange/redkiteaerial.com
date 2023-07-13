import splitbee from "@splitbee/web";

const Footer = () => {

  const footerLinks = [
    {
      href: "https://www.twitter.com/redkiteaerial",
      text: "Twitter",
    },
    {
      href: "https://www.instagram.com/redkiteaerial",
      text: "Instagram",
    },
    // {
    //   href: "https://500px.com/redkiteaerial",
    //   text: "500px",
    // },
    {
      href: "mailto:redkiteaerial@outlook.com",
      text: "Mail",
    },
  ]

  const Item = ({ href, children }) => (
    <li className="underline underline-offset-2">
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </li>
  );
  
  return (
    <footer className="flex flex-col px-6 py-6 text-sm border-t md:text-lg border-stone-light md:px-4">
      <ul className="flex gap-x-2">
        {footerLinks.map((link, index) => (
          <Item key={index} href={link.href}>
            {link.text}
          </Item>
        ))}
      </ul>
      <div className="mt-4 text-xs max-w-prose text-stone-blue">
        Created by <a href="http://alyssacreative.co.uk/">AS Creative</a> - ©Red Kite Aerial - All Rights Reserved - 2023. <br/> Registered in England and Wales.
      </div>
    </footer>
  );
}

export default Footer;