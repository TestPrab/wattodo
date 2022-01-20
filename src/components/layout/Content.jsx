import React from 'react';
import { Sidebar } from './Sidebar.jsx';
import { Tasks } from "../Tasks.jsx";

export const Content = () => {
  return (
    <section className="content">
      <Sidebar />
      <Tasks />
    </section>
  );
}
