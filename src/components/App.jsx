import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [a, setArr] = React.useState([]);
  function setValue(text) {
    setArr((prev) => {
      return [...prev, text];
    });
    console.log(a);
  }

  function dlt(id) {
    setArr(prev=>{
      return prev.filter((ele,index)=>{
        return id!=index
      })
    })
   
  }


  return (
    <div>
      <Header />
      <CreateArea onCall={setValue} />
      {a.map((ele, index) => {
        return (
          <Note
            title={ele.title}
            content={ele.content}
            key={index}
            id={index}
            onDlt={dlt}
          />
        );
      })}

      <Note title="hi" content="bye" />
      <Footer />
    </div>
  );
}

export default App;
