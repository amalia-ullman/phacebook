import {useRef} from "react"
import {db} from "../firebase.js"
import firebase from "../firebase.js"

function inputBox() {
    const inputRef = useRef(null)
    const sendPost = (e) => {
        e.preventDefault()
        if (!inputRef.current.value) return;
        db.collection('posts').add({
            message: inputRef.current.calue,
            name: "Ryan",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    inputRef.current.value = "";
    }
  return (
  <div className="p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6" id="inputsection">
      <div className="flex space-x-4 p-4 items-center">
          <form className="flex flex-1">
              <input 
                className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                type="text" 
                ref={inputRef}
                placeholder="type something idk"/>
          </form>
      </div>
  </div>);
}

export default inputBox;
