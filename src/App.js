import React from 'react';
import { Header } from './components/layout/Header.jsx';
import { Content } from './components/layout/Content.jsx';
import { ProjectsProvider, SelectedProjectsProvider } from './context';


const App = () => {
  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectsProvider>
  );
}

export default App;
