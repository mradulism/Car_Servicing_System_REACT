import React from "react";
import "./Contact.css"

import { Form, FormGroup, Input, Label, Button,  Container } from 'reactstrap'



const Contact = () => {
  return (
    
    <>
    <div>
     <h1 id="heading">About Us</h1>
     <img id="myimage"
                
                src="https://img.freepik.com/free-photo/car-mechanic-wearing-white-uniform-stand-holding-wrench_1150-16605.jpg?w=996&t=st=1673589576~exp=1673590176~hmac=b53625ed2da0f57eee965993bdf03e871cca9be0a591f9a03c142e1524fa4753"
                alt=""
              />
              </div>
              <div className="col"id="mydiv">
                <div id="undermydiv">

                
              <h3>HELLO, CUSTOMERS!</h3>
              <h5>We are qualified enginners hence aware that the auto technology has taken a new leap thus we are fully equipped to cater to cars equipped with advanced technology.</h5>
              <p>Extend personalized service because we value our customers and We also give individual attention to everyone. The auto parts used by us get delivered directly from the OEM Sources which means they are cent percent original and priced much lesser than the main dealers. Our technicians have extensive experience and expertise and work their charm on every </p>
              <p>vehicle they attend to. We at Universal Automobiles provide an array of services to our valued customers. Some of them include accidental repairs, mechanical repairs, insurance </p>
              </div>
              </div>
       <div className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col " id="footerleftside">
              <h1 className="text-secondary"> VehicleCare</h1>
              <p>
                Our mission is to enable premium quality care for your luxury
                car service at affordable pricing . We ensure real-time updates
                for complete car care needs with a fair and transparent pricing
                mechanism.
              </p>
              <div id="socialicons"></div>
              <div id="contactinfo">
                <div id="address">
                  <p>
                    Unit no.4, Reality Warehousing Pvt. Ltd., Behind Reliance
                    Smart, Wagholi, Pune, Maharastra – 412207
                  </p>
                </div>
                <div id="email">
                  <p>contact@VehicleCare.com</p>
                </div>
                <div id="phone">
                  <p>73 9797 9797</p>
                </div>
              </div>
            </div>
            <div className="col" id="footerrightside">
              <h3>Services</h3>
              <ul id="servicelist" class="menu">
                <li
                  id="menu-item-376"
                  class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                >
                  <p>Periodic Maintenance Service</p>
                </li>
                <li
                  id="menu-item-376"
                  class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                >
                  <p>Dent &amp; Paint</p>
                </li>
                <li
                  id="menu-item-376"
                  class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                >
                  <p>Bumper Repair</p>
                </li>
                <li
                  id="menu-item-376"
                  class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                >
                  <p>Accidental Repair</p>
                </li>
                <li
                  id="menu-item-376"
                  class="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-376"
                >
                  <p>Scratch Removal</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
          </>
  );
};

export default Contact;
