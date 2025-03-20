import { Routes, Route } from 'react-router-dom';

import AllMail from '../components/inbox/AllMail';
import MailList from '../components/MailList';
import Starred from '../components/inbox/Starred';
import Sent from '../components/inbox/Sent';
import Draft from '../components/inbox/Draft';
import Spam from '../components/inbox/Spam';
import Important from '../components/inbox/Important';
import Bin from '../components/inbox/Bin';

const Inbox = () => {
  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-lg font-semibold mb-1">Inbox</h1>
      <div className="flex justify-between rounded-lg shadow-lg p-4 h-full">
        <MailList />
        <div className="flex-1 h-full ml-2 bg-white rounded-lg p-4">
          <Routes>
            <Route path="/" element={<h1 className='flex justify-center text-center text-5xl font-extrabold text-green-800 py-16 my-28'>Welcome to Your Mailbox</h1>} />
            <Route path="allmail" element={<AllMail />} />
            <Route path="starred" element={<Starred />} />
            <Route path="sent" element={<Sent />} />
            <Route path="draft" element={<Draft />} />
            <Route path="spam" element={<Spam />} />
            <Route path="important" element={<Important />} />
            <Route path="bin" element={<Bin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
