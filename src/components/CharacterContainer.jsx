import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Result from "./Result";

class CharacterContainer extends Component {
  state = {};
  render() {
    let { data, handleChange } = this.props;
    return (
      <>
        <div className='head'>
          <img
            src='https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_auto/https://8flix.com/wp-content/uploads/2021/05/Breaking-Bad-series-logo-500x314-1.png'
            alt=''
          />
        </div>
        <SearchBox handleChange={handleChange} />
        <div className='container'>
          {data.map((e, i) => (
            <Result
              id={e.char_id}
              key={i}
              name={e.name}
              birthday={e.birthday}
              img={e.img}
              nickname={e.nickname}
              actorname={e.portrayed}
              status={e.status}
            />
          ))}
        </div>
      </>
    );
  }
}

export default CharacterContainer;
