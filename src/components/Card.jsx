import React from "react";
import contacts from "../contacts";

function CardForm({ person, image }) {
  return (
    <>
      <div className="card">
        <div className="top">
          <h2 className="name">{person.name}</h2>
          <img className="circle-img" src={image.url} alt="avatar_img" />
        </div>
        <div className="bottom">
          <div className="info">
            <p>{person.phone}</p>
            <p>{person.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Card() {
  return (
    <>
      <CardForm
        image={{
          url: contacts[0].imgURL,
        }}
        person={{
          name: contacts[0].name,
          phone: contacts[0].phone,
          email: contacts[0].email,
        }}
      />
      <CardForm
        image={{
          url: contacts[1].imgURL,
        }}
        person={{
          name: contacts[1].name,
          phone: contacts[1].phone,
          email: contacts[1].email,
        }}
      />
      <CardForm
        image={{
          url: contacts[2].imgURL,
        }}
        person={{
          name: contacts[2].name,
          phone: contacts[2].phone,
          email: contacts[2].email,
        }}
      />
    </>
  );
}

export default Card;
