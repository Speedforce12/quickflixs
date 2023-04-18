import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rating = ({ rating }) => {
  return (
    <div className=''>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        background
        styles={buildStyles({
          textSize: "30px",
          backgroundColor: "white",

          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
        text={rating}
      />
    </div>
  );
};

export default Rating;
