import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CollectEmails from './components/CollectEmails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollectEmails/>} />
      </Routes>
    </Router>
  );
};

export default App;
