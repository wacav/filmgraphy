import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
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
  );
};

export default Home;
