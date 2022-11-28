import React, { Component } from "react";
class Result extends Component {
  state = {};
  render() {
    let { img, name, actorname, nickname, birthday, status } = this.props;
    return (
      <>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src={img} alt={name} className='card-img' />
            </div>
            <div className='flip-card-back'>
              <h1>{name}</h1>
              <div className='iii'></div>
              <p>Actor Name: {actorname}</p>
              <p>Nickname: {nickname}</p>
              <p>Birthday: {birthday}</p>
              <p>Status: {status}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
