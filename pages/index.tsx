import { useTranslation } from '@common/I18n';
import { makeLanguage } from '@common/I18n/makeTranslation';
import type { GetStaticProps } from 'next';

const Home = ({ target }) => {
  const { t, c } = useTranslation(target);
  return (
    <div>
      <p>target : {target}</p>
      <p>{t('main-test')}</p>
      <p>common use : c( key )</p>
      <p>{c('test')}</p>
      <div className="mt-3">
        <p>Text Base Color</p>
        <div>
          <button className="btn">hello</button>
          <button className="btn btn-primary">hello</button>
          <button className="btn btn-secondary">hello</button>
          <button className="btn btn-accent">hello</button>
          <button className="btn btn-ghost">hello</button>
          <button className="btn btn-link">hello</button>
        </div>
        <div>
          <button className="btn btn-outline">hello</button>
          <button className="btn btn-outline btn-primary">hello</button>
          <button className="btn btn-outline btn-secondary">hello</button>
          <button className="btn btn-outline btn-accent">hello</button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await makeLanguage({ locale, target: 'main' })) },
});
export default Home;
