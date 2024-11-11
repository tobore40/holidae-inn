
import { useState } from "react";

const CheckInForm = ({ addCheckIn }) => {
  const [name, setName] = useState("");
  const [addre, setAddre] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !addre || !phone || !date) return;
    addCheckIn({ name, addre, phone, date });
    setName("");
    setAddre("");
    setPhone("");
    setDate("");
  };

  return (
    <div>
      <form
        className="flex flex-col gap-y-5"
        onSubmit={handleSubmit}
        style={{ marginBottom: "20px" }}
      >
        <label htmlFor="">Guest Fullname</label>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[600px]"
        />
         <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="Enter your Address"
          value={addre}
          onChange={(e) => setAddre(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[600px]"
        />
        <label htmlFor="">Guest Phone Number</label>
        <input
          type="Number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="">Guest Date of Birth</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full px-4 py-2 bg-red-500 text-white rounded">Add Check-In</button>


      </form>
    </div>
  );
};

export default CheckInForm;
