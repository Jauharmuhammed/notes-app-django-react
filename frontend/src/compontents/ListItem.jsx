import React from "react";
import moment from 'moment'
import { Link } from "react-router-dom";
import { GrAdd } from "react-icons/gr";

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

const getTitle = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 30) {
    return title.slice(0, 30);
  }
  return title;
};

let getContent = (note) => {
  let title = getTitle(note)
  let content = note.body.replaceAll(title, '')

  if (content.length > 45) {
      return content.slice(0, 55) + '...'
  } else {
      return content
  }
}

const ListItem = ({ note }) => {
  return (
    <>
      {note ? (
        <div className="text-lg  aspect-square  rounded hover:bg-slate-900">
          <Link to={`/note/${note.id}`}>
            <section className=" p-3 md:p-5 h-full flex flex-col justify-between ">
              <section>
                <section className="text-base md:text-lg">{getTitle(note)}</section>
                <section className="text-sm md:text-base text-gray-800 mt-1 md:mt-3">{getContent(note)}</section>
              </section>
              <section className=" text-xs md:text-sm text-gray-700 ">{moment(note.updated).fromNow()}</section>
            </section>
          </Link>
        </div>
      ) : (
        <div className="text-lg aspect-square rounded  hover:bg-slate-900 flex items-center justify-center">
          <Link className=" h-full w-full" to={`/note/new`}>
            <section className="flex justify-center h-full w-full">
              <GrAdd color="white" className="text-3xl my-auto" />
            </section>
          </Link>
        </div>
      )}
    </>
  );
};

export default ListItem;
