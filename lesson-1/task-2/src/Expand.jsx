import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  };
  showContent = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const { isOpen } = this.state;
    const title = this.props.title;
    const children = this.props.children;

    if (!isOpen) {
      return (
        <div className="expand border">
          <div className="expand__header">
            <span className="expand__title">{title}</span>
            <button className="expand__toggle-btn" onClick={this.showContent}>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.hideContent}>
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>
        <div className="expand__content">{children}</div>
      </div>
    );
  }
}

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Expand.defaltProps = {
  title: '',
  isOpen: false,
};

export default Expand;
