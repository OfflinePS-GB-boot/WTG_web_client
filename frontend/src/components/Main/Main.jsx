import Layout from '../Layout';
import style from './Main.module.css';
import Location from './Location/Location';
import Tabs from './Tabs/Tabs';
import RegistrationForm from './../RegistrationForm/index';

const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
          <Tabs/>
          <RegistrationForm/>
          <Location/>
      </Layout>
    </main>
  );
};

export default Main;