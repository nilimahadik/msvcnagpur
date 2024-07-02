import organizer from "@/images/resources/causes-details-organizar-img-1.jpg";
import React from "react";
import { Image } from "react-bootstrap";

const donations = [
  {
    id: 1,
    image: "recent-donation-img-1.jpg",
    amount: 20,
    name: "David Marks",
    time: "3 hours ago",
    text: "God bless you dear",
  },
  {
    id: 2,
    image: "recent-donation-img-2.jpg",
    amount: 60,
    name: "Jessica Rose",
    time: "6 hours ago",
    text: "God bless you dear",
  },
  {
    id: 3,
    image: "recent-donation-img-3.jpg",
    amount: 30,
    name: "Kevim Martin",
    time: "1 day ago",
    text: "God bless you dear",
  },
  {
    id: 4,
    image: "recent-donation-img-4.jpg",
    amount: 180,
    name: "Anonymous",
    time: "1 day ago",
    text: "God bless you dear",
  },
];

const CausesDetailsRight = () => {
  return (
    <div className="causes-details__right">
      <div className="causes-details__organizer">
        <div className="causes-details__organizer-img">
          <Image src={organizer.src} alt="" />
        </div>
        <div className="causes-details__organizer-content">
          <p>Created 20 Jan, 2021</p>
          <h5>
            Organizer: <span>Jessica Smith</span>
          </h5>
          <ul className="causes-details__organizer-list list-unstyled">
            <li>
              <i className="fas fa-map-marker-alt"></i>Education
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>Wrightwood, Canada
            </li>
          </ul>
        </div>
      </div>
      <div className="causes-details__donations">
        <h3 className="causes-details__donations-title">Recent Donations</h3>
        <ul className="list-unstyled causes-details__donations-list">
          {donations.map(({ id, amount, image, name, text, time }) => (
            <li key={id}>
              <div className="causes-details__donations-img">
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="causes-details__donations-content">
                <h4>${amount}</h4>
                <h5>
                  {name} <span>{time}</span>
                </h5>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CausesDetailsRight;
