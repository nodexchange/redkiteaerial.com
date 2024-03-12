import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Image } from "@components";
import articles from '../../data/articles';
import { BackButton } from '../../components/BackButton';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-bold">Page not found</h2>
      <Link href="/">
        <button className="bg-shine text-black font-bold uppercase text-sm px-6 py-3 rounded-full mt-6">
          Return back to home
        </button>
      </Link>
    </div>
  );
};

const ArticleText = ({headline, subheader, content}) => (
  <div className="flex rounded">
    <div className="flex flex-col gap-4 max-w-prose">
      <div>
        <h2 className="py-1 text-2xl sm:text-4xl font-mtl-bold">
          {headline}
        </h2>
        <p className="text-2xl sm:text-4xl">
          {subheader}
        </p>
      </div>
      <p className="text-lg sm:text-xl">
        {content}
      </p>
    </div>
  </div>
);

export default function BlogArticle({ article }) {
  let content = { ...article };
  if (Object.keys(content).length === 0) {
    content = {
      title: 'Not Found',
      slug: 'not-found',
    };
  }
  return (
    <>
      <NextSeo
        title={`Redkite Aerial | Blog | ${content.title}`}
        canonical={`https://www.redkiteaerial.co.uk/blog/${content.slug}`}
      />
      <BackButton />
      {content.slug === 'not-found' ? (
            <NotFound />
          ) : (
      <main className="relative pb-20">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat">
          <h1 className="text-5xl uppercase">{content.title}</h1>
        </div>
        <div className="grid px-6 gap-x-12 gap-y-4 md:px-4 md:grid-cols-2">
          <Image
            src={content.imageUrl}
            alt="Photo of myself"
            priority
          />
          <section className="flex flex-col gap-y-4">
            <ArticleText {...content} />
            <hr className="-mb-1" />
          </section>
        </div>
      </main>
      )}
    </>
  );
}

export const getServerSideProps = ({ params }) => {
  const { slug } = params;
  const article = articles.articles.filter(article => article.url === `/blog/${slug}`);
  const props = (article.length ? ({article: article[0]}) : ({}))
  return { props };
};
