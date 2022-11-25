import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

let getTime = (note) => {
  return new Date(note?.created).toLocaleDateString();
};

const NotePage = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getNote(id);
  }, [id]);

  const getNote = (noteId) => {
    if (id === 'new') return

    axios.get(`/api/notes/${noteId}/`).then((response) => {
      setNote(response.data);
    });
  };

  const createNote = async () => {
    axios.post(`/api/notes/`, note).then((response) => {
      console.log(response.data);
    });
  };

  const updateNote = async (noteId) => {
    axios.put(`/api/notes/${noteId}/`, note).then((response) => {
      console.log(response.data);
    });
  };

  const deleteNote = (noteId) => {
    axios.delete(`/api/notes/${noteId}/`).then((response) => {
      navigate("/");
    });
  };



  const handleUpdate = () => {
    if (id !== 'new' && !note.body){
      deleteNote(id)
    }else if (id !== 'new'){
      updateNote(id);
    }else if (id === 'new' && note !== null){
      createNote()
    }
    navigate("/");
  };

  

  const handleNote = (value) => {
    setNote((note) => ({ ...note, body: value }));

  };

  return (
    <div className="bg-transparent md:pt-2">
      <div className="flex justify-between items-center mb-5 md:my-4">
        <div
          onClick={handleUpdate}
          className="w-10 h-10 flex justify-center items-center rounded-xl bg-gray-700 cursor-pointer"
        >
          <MdArrowBackIosNew className="text-white text-xl " />
        </div>
        <div className="dark:text-white">{getTime(note)}</div>
        {id === 'new' ? (<button
          onClick={handleUpdate}
          className="text-white py-2 px-3  rounded-xl bg-gray-700"
        >
          Done
        </button>) : (<button
          onClick={() => deleteNote(id)}
          className="text-white py-2 px-3  rounded-xl bg-gray-700"
        >
          Delete
        </button>)}
      </div>
      <textarea
        autoFocus
        placeholder="Write Something Here......"
        className=" dark:text-white bg-transparent w-full h-[70vh] outline-none border-none resize-none"
        value={note?.body}
        onChange={(e) => handleNote(e.target.value)}
      ></textarea>
    </div>
  );
};

export default NotePage;
