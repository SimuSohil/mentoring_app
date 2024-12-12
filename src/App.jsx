import { React } from "react";
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Mentoring App</h1>
      </header>

      {/* Navigation */}
      <nav className="App-navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="app-main">
        <h2>Welcome to the Mentoring App</h2>
        <p>This is the main content area. You can customize it further.</p>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2024 Mentoring App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;