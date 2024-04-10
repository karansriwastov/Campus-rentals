import React from "react";
import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <>
      <div class="px-4 py-5  text-center">
        <h1 class="display-7 fw-bold text-body-emphasis">
          Thank You for Your Feedback!
        </h1>
        <img src="\src\assets\thank.png" class="img-fluid" alt="error-logo" height={"100"}></img>
        <div class="col-lg-10 mx-auto">
          <p class="lead mb-4 thank-text">
          "Thank you for taking the time to provide feedback! Your input is invaluable to us as we strive to improve campus-rentals and provide you with the best possible experience. We truly appreciate your support and look forward to implementing your suggestions to make our platform even better for you. If you have any further questions or concerns, please don't hesitate to reach out to us. Thank you again for being a valued member of our community!
          <br/>

Best regards,
campus-rentals Team"
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/">
              <button
                type="button"
                class="btn btn-warning btn-lg px-4 gap-3"
                fdprocessedid="g5q58i"
              >
                Go back to Home-page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
