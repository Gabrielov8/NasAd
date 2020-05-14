import React, { Component } from 'react';

class FormAnnouncement extends Component {

  createAnnouncement = () => {
    return
  }

  render() {
    return (
      <div>
        <div>
          <form action="">
            <input type="text" placeholder='тема' />
            <input type="text" placeholder='blogger' />
            <input type="text" placeholder='сумма' />
            <button onClick={this.createAnnouncement} > Создать </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormAnnouncement;
