import { Route, Routes } from 'react-router-dom';
import NavigationLayout from './navigation/navigation';
import AboutScreen from './pages/about';
import ContactScreen from './pages/contact';
import ExploreScreen from './pages/explore';
import HomeScreen from './pages/home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="explore" element={<ExploreScreen />} />
          <Route path="contact" element={<ContactScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
