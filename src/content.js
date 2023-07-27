import { useEffect, useState } from "react";

function Content() {
  const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
  // 1.useEffect(callback)
  // 2. useEffect(callback,[])
  // 3. useEffect (callback,[deps])
  // Call back sẽ được gọi lại mỗi khi deps thay đổi
  //clear up function
  // =================
  // 1. callback luôn được gọi sau khi component mouse
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [time, setTime] = useState(180);
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime((pre) => pre + 1);
    }, 1000);
    return () => clearInterval(timeId);
  }, []);

  useEffect(() => {
    document.title = title;
  }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [type]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        //show
        setShowGoToTop(true);
      } else {
        //hide
        setShowGoToTop(false);
      }
      // setShowGoToTop(window.scrollY >= 200)
    };
    window.addEventListener("scroll", handleScroll);
    //Clear up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // clean Up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      <h1>{time}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          GoToTop
        </button>
      )}
      <h1>{width}</h1>
    </div>
  );
}
export default Content;
