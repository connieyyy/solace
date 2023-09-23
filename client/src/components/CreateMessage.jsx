import React, {useState} from 'react'
import Spinner from '../components/Spinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateMessage = () => {
    const [person, setPerson] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const handleSaveMessage = () => {
        const data = {
            person, 
            message,
        };
        setLoading(true);
        axios
            .post('http://localhost:8000/letters', data)
            .then(() => {
                setLoading(false);
                navigate('/dashboard');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error has occurred. Please check console.')
                console.log(error)
            });
    }

    return ( 
        <div className="create-message">
            <h1>Create Message</h1>
            {loading ? <Spinner/> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px p-4 mx auto'>
                <div className ='my-4'>
                    <label className ='text-xl mr-4 text-gray-500'>Person</label>
                    <input
                    type='text'
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                 />
                </div>

                <div className ='my-4'>
                    <label className ='text-xl mr-4 text-gray-500'>Message</label>
                    <input
                    type='text'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                 />
                </div>

            <button className='p-2 bg sky-300 m-8' onClick={handleSaveMessage}>Save</button>
            </div>
        </div>
    )
}
export default CreateMessage;