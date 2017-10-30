import React from 'react';

export default (props) => {
  return (
    <tr>
      <td>{props.index+1}</td>
      <td>
        <img src={props.data.img} className="camperAvatar" />
        <a href={props.data.camperURL}>{props.data.username}</a>
      </td>
      <td>{props.data.recent}</td>
      <td>{props.data.alltime}</td>
    </tr>
  )
}
