import './headElement.css';

export default function HeadElement() {
  return(
    <div className="head-element">
      <div className="task">Task Name</div>
      <div className="date">Date</div>
      <div className="time">
        <span>hh:</span>
        <span>mm</span>
      </div>
      <span>Completed</span>
    </div>
  )
}