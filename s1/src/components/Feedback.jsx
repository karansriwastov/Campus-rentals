import React, { useRef } from "react";
import {useNavigate} from 'react-router-dom'
export default function Feedback() {
  let test = false;
  const text1 = useRef("");
  const text2 = useRef("");
  const text3 = useRef("");
  const text4 = useRef("");
  const text5 = useRef("");
  const navigate=useNavigate();
  const reDirect=()=>{
    if (
        text1.current.value === "" ||
        text2.current.value === "" ||
        text3.current.value === "" ||
        text4.current.value === ""
      ) {
        document.querySelector(".fill").style.display="block"
      }
      else{
        navigate("/thank-you")
      }
  }
  return (
    <div class="container ">
      <div class="display-4" style={{ fontWeight: "700" }}>
        Tell Me What You Think?
      </div>
      <p class="feedText mx-5 my-5">
      "Welcome to campus-rentals Feedback Form!

Thank you for choosing to share your thoughts with us. Your feedback is incredibly important as it helps us understand how we can better serve you and improve your experience on our website.

Please take a few moments to tell us about your experience. Whether it's suggestions for improvement, compliments, or concerns, we value your input and will use it to enhance our services.

We appreciate your time and participation in helping us make campus-rentals the best it can be!

Warm regards,
campus-rentals Team"
      </p>
      <div class="mb-10 my-5">
        <label for="knowing" class="display-6 " style={{ fontWeight: "400" }}>
        How satisfied are you with your experience using campus-rentals for renting equipment or booking facilities?
        </label>
        <input
          type="text"
          class="form-control my-2"
          id="exampleFormControlInput1"
          placeholder=""
          ref={text1}
        />
      </div>
      <div class="mb-10 my-5">
        <label for="knowing" class="display-6 " style={{ fontWeight: "400" }}>
          Were you able to easily find the information you were looking for?
        </label>
        <input
          type="text"
          class="form-control my-2"
          id="exampleFormControlInput1"
          placeholder=""
          ref={text2}
        />
      </div>
      <div class="mb-10 my-5">
        <label for="knowing" class="display-6 " style={{ fontWeight: "400" }}>
        How easy was it to find the equipment or facilities you were looking for on campus-rentals?
        </label>
        <input
          type="text"
          class="form-control my-2"
          id="exampleFormControlInput1"
          placeholder=""
          ref={text3}
        />
      </div>
      <div class="mb-10 my-5">
        <label for="knowing" class="display-6 " style={{ fontWeight: "400" }}>
          What aspects do you think could be improved?Did you encounter any difficulties during the rental or booking process? If yes, please describe.
        </label>
        <input
          type="text"
          class="form-control my-2"
          id="exampleFormControlInput1"
          placeholder=""
          ref={text4}
        />
      </div>
      <div class="mb-10 my-5">
        <label
          for="exampleFormControlTextarea1"
          class="form-label display-6 "
          style={{ fontWeight: "400" }}
        >
          Any additional comments or suggestions?
        </label>
        <textarea
          class="form-control my-2"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={text5}
        ></textarea>
      </div>
      <p className="fill">
        Oops! It seems like you missed filling out some required fields in the
        feedback form. Please make sure to complete all mandatory fields before
        submitting your feedback.
      </p>
      <button type="button" class="btn btn-primary" onClick={()=>reDirect()}>
        Submit Feedback
      </button>
    </div>
  );
}
