import React, { Component } from 'react';
import { dataOfCustomerSendToBase } from '../../../redux/advertiser/actions';
import { connect } from 'react-redux'

class FormAnnouncement extends Component {

  state = {
    message: false
  }

  createAnnouncement = (event) => {
    event.preventDefault()

    const { subject, nameBlogger, cash } = event.target;
    if (Number(cash.value)) {
      this.props.dataOfCustomerSendToBase(subject.value, nameBlogger.value, cash.value);
      this.setState({
        ...this.state, message: false
      })
    } else {
      this.setState({
        ...this.state, message: true
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <form type='submit' onSubmit={this.createAnnouncement} >
            <div><label>Тема:<input required name="subject" type="text" placeholder='введите текст ...' /> </label></div>
            <div><label>Blogger:<input required name="nameBlogger" type="text" placeholder='введите текст ...' /> </label></div>
            <div><label>Сумма:<input required name="cash" type="text" placeholder='введите текст ...' /> </label>
              {this.state.message && 'введите число'}
            </div>
            <button type='submit'> Создать </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dataOfCustomerSendToBase,
}

export default connect(null, mapDispatchToProps)(FormAnnouncement);
