'use client'

import { FaChevronDown } from "react-icons/fa";
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns'

export default function CalendarDropdown({label}) {
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onChange = (date) => {
        setValue(date)
        setOpen(false)
    }

    return <div className="mr-8 py-10">
    <label htmlFor="checkin" className="block text-gray-500 text-xs mb-1 uppercase">{label}</label>
    <div
        onClick={handleOpen}
    className="cursor-pointer w-40 h-7 form-input text-gray-600 text-sm border-b border-b-gray-600 pb-1 flex justify-between items-end">
        <p className="font-playfair">{value? format(value, 'E, do MMM yyyy') : null}</p>
        <FaChevronDown className="text-[0.6rem]"/>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute w-96 h-96 bg-white shadow-lg rounded-xl p-4 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">  
        <Calendar onChange={onChange} value={value} />
  </div>
        </Modal>
  </div>
}