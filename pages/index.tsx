import { useTranslation } from '@common/I18n';
import { makeLanguage } from '@common/I18n/makeTranslation';
import Button from '@components/atoms/Button';
import { Link } from '@libs/next/hint';
import type { GetStaticProps } from 'next';

const Home = () => {
  const { t, c } = useTranslation();
  return (
    <div>
      <Link href="/" locale="ko">
        <button className="btn">ko</button>
      </Link>
      <Link href="/" locale="en">
        <button className="btn">en</button>
      </Link>
      <p>target : </p>
      <p>{t('main-test')}</p>
      <p>common use : c( key )</p>
      <p>{c('test')}</p>
      <div className="mt-3">
        <p>Text Base Color</p>
        <div>
          <Button>hello</Button>
          <Button variant="primary">hello</Button>
          <Button variant="accent">hello</Button>
          <Button variant="secondary">hello</Button>
          <Button variant="ghost">hello</Button>
          <Button variant="link">hello</Button>
        </div>
        <div>
          <Button>hello</Button>
          <Button isOutline variant="primary">
            hello
          </Button>
          <Button className="btn-outline" isOutline variant="accent">
            hello
          </Button>
          <Button variant="secondary" isOutline>
            hello
          </Button>
          <Button isOutline variant="ghost">
            hello
          </Button>
          <Button isOutline variant="link">
            hello
          </Button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await makeLanguage({ locale, target: 'main' })) },
});
export default Home;
