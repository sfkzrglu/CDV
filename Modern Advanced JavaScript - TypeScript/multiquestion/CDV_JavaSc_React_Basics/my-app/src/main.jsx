import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Tasks from "./Tasks.jsx"
import Hello,{Hello2} from "./Hello.jsx";
import HotButton from "./HotButton.jsx";
import ColoredText from "./ColoredText.jsx"
import ColorSelector,{ColorButton} from "./ColorSelector.jsx";
import UserLogged,{UserInfo,Secret} from "./UserLogged.jsx";
import ConsoleText,{TextType} from "./ConsoleText.jsx";

//Task 2 used to be written into render function.
const helloWorldElement=<h1>Hello World!</h1>
//Task 7
const isLogged = true;
const userInfo = { id: 120, username: "panzmalty" };
const secret = "123456";
//Task 9
const hotButtonClickCode = ({ name }) => console.log("HotButton: " + name);

ReactDOM.createRoot(document.getElementById("myapp")).render(
  <React.StrictMode>
    <Tasks taskStartindex={3}>{/*not a Task*/}
      {/*Task 3*/} 
      <Hello/>
      {/*Task 4*/}
      <Hello2 title="Mr" name="John" surname="Doe" />
      {/*Task 5*/}
      <div>
        <ColoredText red="27" green="AE" blue="60" text="A shade of Green" />
        <ColoredText red="E7" green="4C" blue="3C" text="A shade of Red" />
        <ColoredText red="34" green="98" blue="DB" text="A shade of Blue" />
        <ColoredText red="F3" green="9C" blue="12" text="A shade of Orange" />
      </div>
      {/*Task 6*/}
      <ColorSelector>
        <ColorButton size="36" color="E74C3C">
          Red
        </ColorButton>
        <ColorButton size="24" color="27AE60">
          Green
        </ColorButton>
        <ColorButton size="36" color="3498DB">
          Blue
        </ColorButton>
      </ColorSelector>
      {/*Task 7*/}
      <UserLogged logged={isLogged}>
        <UserInfo userInfo={userInfo} />
        <Secret secret={secret} />
      </UserLogged>
      {/*Task 8*/}
      <div>
        <ConsoleText text="Yes" textType={TextType.success} />
        <ConsoleText text="Maybe" textType={TextType.info} />
        <ConsoleText text="No" textType={TextType.danger} />
      </div>
      {/*Task 9*/}
      <div>
        <HotButton text="North"/>
        <HotButton text="South"/>
        <HotButton text="East"/>
        <HotButton text="West"/>
      </div>
    </Tasks>
  </React.StrictMode>,
);