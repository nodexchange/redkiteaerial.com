function generateSiteMap(articles) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.redkiteaerial.co.uk</loc>
       <changefreq>monthly</changefreq>
      <priority>1.0</priority>
     </url>
     <url>
       <loc>https://www.redkiteaerial.co.uk/pricing</loc>
     </url>
     <url>
       <loc>https://www.redkiteaerial.co.uk/services</loc>
     </url>
     <url>
       <loc>https://www.redkiteaerial.co.uk/gallery</loc>
     </url>
     <url>
       <loc>https://www.redkiteaerial.co.uk/areas-we-cover</loc>
     </url>
     <url>
       <loc>https://www.redkiteaerial.co.uk/blog</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
