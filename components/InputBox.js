import {useRef, useState} from "react"
import {db} from "../firebase.js"
import firebase from "../firebase.js"
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";

function inputBox() {
    const inputRef = useRef(null)
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const sendPost = (e) => {
        e.preventDefault()

        if (!inputRef.current.value) return;

        addDoc(collection(db, "posts"), {
            message: inputRef.current.value, 
            name: "theusername",
            timestamp: serverTimestamp()
        }) 
    inputRef.current.value = "";
    };
  return (
  <div className="p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6" id="inputsection">
      <div className="flex space-x-4 p-4 items-center">
          <form className="flex flex-1">
              <input 
                className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                type="text" 
                ref={inputRef}
                placeholder="type something idk"/>
                <button hidden type="submit" onClick={sendPost}>Submit</button>
          </form>
      </div>
        <div className="flex justify-evenly p-3 border-t">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500" /> 
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>
            <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                <CameraIcon className="h-7 text-blue-700" /> 
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                <input
                type="file"
                ref = {filepickerRef}
                hidden/>
            </div>
            <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-200" /> 
                <p className="text-xs sm:text-sm xl:text-base">HAPPY</p>
            </div>
        </div>


  </div>);
}

export default inputBox;
