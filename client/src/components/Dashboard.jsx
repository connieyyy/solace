import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import Asian from "./Asian";
import African from "./African";
import European from "./European";
import LatinAmerica from "./LatinAmerica";
import Mediterranean from "./Mediterranean";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './pages.css';
import MiddleEast from './MiddleEast';

const Dashboard = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
    .get('http://localhost:8000/letters')
    .then((response) => {
      setLetters(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome to your dashboard!</h1>

      <button onClick={handleLogout}>
        Logout
      </button>

      <div className="message-board">
      <div className="p-4">
        <div className='flex justify-between items-center'>
          <h1 className='messagetitle'>Message Board</h1>
          <p className = "message-purpose">Write one thing you are grateful for about a family or friend.</p>
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>Message No.</th>
                <th className='border border-slate-600 rounded-md'>Name</th>
                <th className='border border-slate-600 rounded-md'>Message</th>
              </tr>
            </thead>
            <tbody>
              {letters.map((letter, index) => (
                <div>
                   <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                  {letter.person}
                </td>
                 <td className='border border-slate-700 rounded-md text-center'>
                  {letter.message}
              </td>
                </div>

              ))}
            </tbody>
          </table>
        )}
      </div>
        
    </div>
      
    <h3>Try new recipes!</h3>
      <Asian/>
      <African />
      <European/>
      <LatinAmerica />
      <Mediterranean/>
      <MiddleEast/>

    </div>
  );
};

export default Dashboard;