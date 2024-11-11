// src/components/CheckInList.js


const CheckInList = ({ checkIns }) => {
  return (
    <ol>
      {checkIns.map((checkIn, index) => (
        <li key={index} className="leading-[60px]">
          <strong>Guest Name:</strong> {checkIn.name} - <strong>Address</strong>: {checkIn.addre} - <strong>Phone number:</strong>  {checkIn.phone} - <strong>Date of Birth:</strong>  {checkIn.date}
        </li>
      ))}
    </ol>
  );
};

export default CheckInList;
