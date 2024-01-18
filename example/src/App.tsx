import React from 'react';
import './index.css';
import Phone from "./phone.png";
import Logo from "./logo.svg";
import "3d-phone-carousel/dist/index.css"
import { PhoneSlider } from '3d-phone-carousel/dist';

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1>3D Phone Carousel</h1>
      </header>

      <PhoneSlider items={[
        {
          description: "Example Description of slide 1",
          title: "Title of image 1",
          image: Phone
        },
        {
          description: "Example Description of slide 2",
          title: "Title of image 2",
          image: Phone
        },
        {
          description: "Example Description of slide 3",
          title: "Title of image 3",
          image: Phone
        },
      ]}/>

      <br/>
      <hr/>
      <br/>

      <div className="bottom-container">

        <div className="part">
          <h2>Attributes</h2>
          <ul>
            <li>Modern simple look</li>
            <li>Easy to implement</li>
            <li>Easy to modify</li>
            <li>CSS based 3D effect</li>
            <li>Written with React</li>
          </ul>
        </div>

        <div className="part">

          <h2>Learn more</h2>
          <ul>
            <li><a href="https://github.com/mahdi-g01/3d-phone-carousel">Github page</a></li>
          </ul>
          <ul>
            <li><a href="https://geekop.ir">Example of usage (geekop.ir)</a></li>
          </ul>
        </div>

        <div className="part">

          <img alt={"3D Phone Carousel logo"} src={Logo}/>

        </div>

      </div>

      <br/>
      <hr/>

      <footer>
        <p>This project has been made by <strong>Mahdi Khansari</strong> under <strong>MIT licence</strong></p>
        <p>Help me to maintain and improve it :)</p>
      </footer>

    </div>
  );
}

export default App;
