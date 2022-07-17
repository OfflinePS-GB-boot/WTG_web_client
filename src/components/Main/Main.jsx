import Layout from '../Layout';
import style from './Main.module.css';
import Location from './Location/Location';

const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
          <Location/>
      </Layout>
    </main>
  );
};

export default Main;