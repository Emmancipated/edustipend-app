import MainPage from './components/MainPage';
import SideBar from './components/SideBar';
import {GlobalStateProvider} from '../src/Provider';

const App = () => {

  return (
    <GlobalStateProvider>
    <section className="App">
      <div className="main-layout">
        <MainPage />
        <SideBar/>
      </div>
    </section>
    </GlobalStateProvider>
  );
}


export default App;

// I identified 3 core components; 
// 1. header
// 2. MainPage
// 3. Sider
// I wrote code for MainPage and Sidebar
