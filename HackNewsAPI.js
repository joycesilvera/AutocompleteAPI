mport * as React from "react";

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <TopStories />
    </>
  );
}

function TopStories() {
  

  let [storyIds, setStoryIds] = React.useState([]);
  
  React.useEffect(() => {
    var url =
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
   
     const subscription =async()=>{
      let data = await fetch(url);
      let response = await data.json();
      //console.log(response);
      setStoryIds(response);
     }  
     subscription();
  }, []);
  console.log(storyIds);
  return(
    <div>
    <div>hey!</div>
    <ul>
    {storyIds.map((item) => {
      return <li key= {item}> {item} </li>
    })}
    </ul>
    </div>
  )
}

export default App;
