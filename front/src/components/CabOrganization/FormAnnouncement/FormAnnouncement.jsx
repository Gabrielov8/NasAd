import React, { Component } from "react";
import { dataOfCustomerSendToBase } from "../../../redux/advertiser/FetchData/fetchSendToBase";
import { connect } from "react-redux";
// import { changeActiveBargaining } from '../../../redux/advertiser/actions'

class FormAnnouncement extends Component {
  state = {
    message: false,
  };

  createAnnouncement = (event) => {
    event.preventDefault();

    const { subject, nameBlogger, cash } = event.target;
    if (Number(cash.value)) {
      this.props.dataOfCustomerSendToBase(
        subject.value,
        nameBlogger.value,
        cash.value
      );
      this.setState({
        ...this.state,
        message: false,
      });
    } else {
      this.setState({
        ...this.state,
        message: true,
      });
    }

    // this.props.changeActiveBargaining()
  };

  render() {
    return (
      <div>
        <div>
          <form type="submit"  onSubmit={this.createAnnouncement} onReset="return confirm('eee')">
            <div>
              <label>
                Тема:
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="введите тему ..."
                />{" "}
              </label>
            </div>
            <div>
              <label>
                Blogger:
                <input
                  required
                  name="nameBlogger"
                  type="text"
                  placeholder="введите текст ..."
                />{" "}
              </label>
            </div>
            <div>
              <label>
                Сумма:
                <input
                  required
                  name="cash"
                  type="text"
                  placeholder="введите сумму ..."
                />{" "}
              </label>
              {this.state.message && "введите число"}
            </div>
            <button  type='submit' > Создать </button>
            <button  type='reset' > Очистить </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dataOfCustomerSendToBase,
  // changeActiveBargaining
};

export default connect(null, mapDispatchToProps)(FormAnnouncement);
