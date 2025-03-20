import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
const AllMail = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    fetch('/mail.json')
      .then(response => response.json())
      .then(data => setMails(data))
      .catch(error => console.error('Error fetching mails:', error));
  }, []);

  return (
    <div className='flex-col gap-2 h-full py-6'>
      <div className='flex justify-between items-center'>
        <div className='hidden md:flex items-center border border-gray-300 rounded-full bg-gray-100 px-4 py-1 w-60'>
          <img src={assets.search_icon} alt="search_icon" className='h-4 w-4' />
          <input
            type="text"
            className='outline-none bg-transparent text-black w-full ml-2'
            placeholder="Search"
          />
        </div>
        <div className='flex justify-between gap-3 h-5 w-5 mr-20'>
          <img src={assets.mail_icon} alt="mail_icon" className='cursor-pointer'/>
          <img src={assets.spam_icon} alt="spam_icon" className='cursor-pointer'/>
          <img src={assets.delete_icon} alt="" className='cursor-pointer'/>
        </div>
      </div>
      <div className="space-y-1 p-2 m-1 h-full rounded-md overflow-y-auto bg-gradient-to-bl from-green-300 to-blue-200">
        <table className="min-w-full bg-white bg-opacity-0">
          <tbody>
            {mails.map((mail) => (
              <tr key={mail.id} className="hover:bg-gray-100">
                <td className="px-4 py-2"><input type="checkbox" /></td>
                <td className="px-4 py-2">{mail.sender}</td>
                <td className="px-4 py-2">{mail.subject}</td>
                <td className="px-4 py-2">{mail.body}</td>
                <td className="px-4 py-2">{(new Date(mail.date)).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMail;
