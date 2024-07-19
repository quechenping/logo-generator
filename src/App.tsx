import { Layout } from '@/features';
import { AppProvider } from '@/providers/app';

import Home from './pages/Home';

function App() {
  return (
    <AppProvider>
      <Layout>
        <Home />
      </Layout>
    </AppProvider>
  );
}

export default App;
