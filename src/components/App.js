import React from 'react';
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'
import 'todomvc-app-css/index.css'

const App = () => (
  <section className="todoapp">
    <Header />
    <MainSection />
  </section>
)

export default App
