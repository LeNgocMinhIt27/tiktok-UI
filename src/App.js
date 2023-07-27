import Layout from "~/components/layout/layout";
import { StrictMode, useState } from "react";
import { useEffect } from "react"; // side effect viết đoạn code update DOm call APi Listen DOm event
import "bootstrap/dist/css/bootstrap.min.css";
// const orders = [100, 200, 300];

// function App() {
//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, cur) => total + cur);
//     console.log(total);
//     return total;
//   }); //Giá trị khởi tạo
//   const [info, setInfo] = useState({
//     name: "Minh",
//     age: 18,
//     address: "Thanh Hoa",
//   });
//   const handleIncrease = () => {
//     setCounter(counter + 1); // Khi click sẽ tăng lên 1
//     // setCounter((pro) => pro + 1);
//     // setCounter((pro) => pro + 1);
//     // setCounter((pro) => pro + 1); = 4
//   };
//   // const handlePro = () => {
//   //   setInfo({
//   //     ...info,
//   //     bio: "Minhpro",
//   //   });
//   // };
//   const handlePro = () => {
//     setInfo((pre) => {
//       return {
//         ...pre,
//         bio: "Minhpro",
//       };
//     });
//   };
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>{counter}</h1>
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handlePro}>pro</button>
//     </div>
//   );
// }

//RANDOM
// const gifs = ["CPU 19", "RAM 32GB RGB", "RBG Keyboard"];
// function App() {
//   const [text, setText] = useState();
//   const handleText = () => {
//     const index = Math.floor(Math.random() * gifs.length);
//     setText(gifs[index]);
//   };

//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>{text||'Chưa có phần thưởng'}</h1>
//       {/* <Header /> */}

//       <button onClick={handleText}>Increase</button>
//     </div>
//   );
// }

//SUBMIT FORM
// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const handleSubmit = () => {
//     //Call API
//     console.log({
//       name,
//       email,
//     });
//   };
//   // console.log(name);
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <input value={name} onChange={(e) => setName(e.target.value)}></input>
//       <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
//       {/* <button onClick={() => setName("Nguyen Van B")}>change</button> */}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

//RADIO
// const courses = [
//   {
//     id: 1,
//     name: "Javascript",
//   },
//   {
//     id: 2,
//     name: "ReacJS",
//   },
//   {
//     id: 3,
//     name: "PHP",
//   },
// ];
// function App() {
//   const [checked, setChecked] = useState(1)
//   const handleSubmit = () => {
//     //Call API
//     console.log({ id: checked });
//   };
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       {courses.map(course =>

//           <div key={course.id}>
//             <input
//               type="radio"
//               checked={checked === course.id}
//               onChange={() => setChecked(course.id)}
//             />
//             {course.name}
//           </div>

//       )}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

//CHECKED

// function App() {
//   const [checked, setChecked] = useState([]);
//   const handleSubmit = () => {
//     //Call API
//     console.log({ ids:checked });
//   };
//   const handlecheck = (id) => {
//     setChecked((prev) => {
//       const isChecked = checked.includes(id);
//       if (isChecked) {
//         return checked.filter((item) => item !== id);
//       } else {
//         return [...prev, id];
//       }
//     });
//   };
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() =>   (course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

//TODO LIST
// function App() {
//   // console.log(storageJobs);
//   const [job, setJob] = useState("");
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem("jobs"));
//     console.log(storageJobs);
//     return storageJobs;
//   });
//   const handleJob = () => {
//     setJobs((pre) => {
//       const newJobs = [...pre, job];
//       const jsonJob = JSON.stringify(newJobs);
//       localStorage.setItem("jobs", jsonJob);
//       return newJobs;
//     });
//     setJob("");
//   };
//   return (
//     <div style={{ padding: 32 }}>
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleJob}>Add</button>
//       <ul>
//         {jobs.map((jobn, index) => (
//           <li key={index}>{jobn}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
function App() {
  return <Layout />;
}

export default App;
