import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Reserve() {
  return (
    <div className='reserve'>
      <div claaa='col-md-4'>
        <div class='well'>
          <div class='well-header'>BOOK ONLINE</div>
          <p class='header_p'>
            Even though walk-ins are Welcome, we encourage you to contact us via
            the form below to set your appointment. You will be contacted within
            24 hours for confirmation.
          </p>
          <div class='form-group1'>
            <label for='Select' className='contact-name'>
              Contact By:
            </label>
            <select id='Select' class='form-control'>
              <option>Email</option>
              <option>Phone</option>
            </select>
          </div>
          <div className='form-group1'>
            <label htmlFor='inputfullname'></label>
            <input
              type='fullname'
              class='form-control'
              id='inputfullname'
              placeholder='Your Name'
            />
          </div>
          <div class='form-group1'>
            <label for='inputemail'></label>
            <input
              type='email'
              class='form-control'
              id='inputemail'
              placeholder='Your Email'
            />
          </div>
          <div class='form-group1'>
            <label for='inputphone'></label>
            <input
              type='phone'
              class='form-control'
              id='inputphone'
              placeholder='Your Phone'
            />
          </div>
          <p className='ap-date'>Appointment Date:</p>

          <div class='form-group'>
            <label for='datepicer'>1st Choice:</label>
            <div class='input-group date' id='datetimepicker8'>
              <input type='date' class='form-control' />
              <span class='input-group-addon'>
                <span class='fa fa-calendar'></span>
              </span>
            </div>
          </div>
          <div class='form-group'>
            <label for='datepicer'>2nd Choice:</label>
            <div class='input-group date' id='datetimepicker8'>
              <input type='date' class='form-control' />
              <span class='input-group-addon'>
                <span class='fa fa-calendar'></span>
              </span>
            </div>
          </div>
          <div class='form-group'>
            <label for='Select'>Desired Service:</label>
            <select id='Select' class='form-control'>
              <option>Braids &amp; Twist</option>
              <option>Clipper Cut</option>
              <option>Corrective Color</option>
              <option>Extensions Per Track</option>
              <option>Full Foil</option>
              <option>Haircolor</option>
              <option>Haircut</option>
              <option>Partial Foil</option>
              <option>Relaxer/Retouch</option>
              <option>Shampoo, Blow Dry or Se</option>
            </select>
          </div>
          <div class='form-group'>
            <textarea
              class='form-control'
              type='textarea'
              id='message'
              placeholder='Message'
              maxlength='140'
              rows='7'
            ></textarea>
          </div>
          <div class='checkbox'>
            <label htmlFor=''>
              <input type='checkbox' />
              Terms &amp; conditions
            </label>
          </div>
          <button type='submit' class='btn'>
            Submit
          </button>
          <button type='submit' class='btn'>
            Cancel
          </button>
          <span class='help-block'>
            all appointment have $10 cancellation fee, thank you.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
