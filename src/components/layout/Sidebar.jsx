import React, {useState} from 'react';
import { 
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

import {Projects} from '../Projects.jsx';
import { AddProject } from "../AddProject.jsx";
import { useSelectedProjectsValue } from "../../context/";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectsValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" 
          className={active === 'inbox' ? 'active' : undefined }
          onKeyDown = {()=>{
            setActive('inbox');
            setSelectedProject('INBOX');
          }}
          onClick = {()=>{
            setActive('inbox');
            setSelectedProject('INBOX');
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" 
          className={active === 'today' ? 'active' : undefined }
          onKeyDown = {()=>{
            setActive('today');
            setSelectedProject('TODAY');
          }}
          onClick = {()=>{
            setActive('today');
            setSelectedProject('TODAY');
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="next_7" 
          className={active === 'next_7' ? 'active' : undefined }
          onKeyDown = {()=>{
            setActive('next_7');
            setSelectedProject('NEXT_7');
          }}
          onClick = {()=>{
            setActive('next_7');
            setSelectedProject('NEXT_7');
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>

      <div className="sidebar__middle" 
        onKeyDown={()=> setShowProjects(!showProjects)}
        onClick={()=> setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown 
            className={ !showProjects ? 'hidden-projects': undefined }/>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
}
