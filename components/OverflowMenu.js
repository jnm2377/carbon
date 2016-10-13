import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import ClickListener from '../internal/ClickListener';
import Icon from '../elements/Icon';
import '@console/bluemix-components/consumables/scss/components/overflow-menu/overflow-menu.scss';

class OverflowMenu extends Component {

  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    id: PropTypes.string,
    ariaLabel: PropTypes.string,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    handleClick: PropTypes.func,
  }

  static defaultProps = {
    ariaLabel: 'List of options',
    open: false,
    onClick: () => {},
  }

  state = {
    open: this.props.open,
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ open: nextProps.open });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  handleClick = (evt) => {
    this.setState({ open: !this.state.open });
    this.props.onClick(evt);
  }

  handleClickOutside = () => {
    this.setState({ open: false });
  }

  handleKeyPress = (evt) => {
    const key = evt.key || evt.which;

    if (key === 'Enter' || key === 13) {
      this.setState({ open: false });
    }
  }

  render() {
    const {
      id,
      tabIndex,
      ariaLabel,
      children,
      ...other,
    } = this.props;

    const overflowMenuClasses = classNames(
      this.props.className,
      'bx--overflow-menu',
      { 'bx--overflow-menu--open': this.state.open },
    );

    const overriddenStyles = {
      height: 40,
    };

    return (
      <ClickListener onClickOutside={this.handleClickOutside}>
        <div
          {...other}
          ref="overflow"
          className={overflowMenuClasses}
          onClick={this.handleClick}
          aria-label={ariaLabel}
          id={id}
          tabIndex={tabIndex}
        >
          <Icon
            className="bx--overflow-menu__icon"
            name="overflow_menu_icon"
            fill="#dfe6eb"
            height="40px"
            viewBox="0 0 14 60"
            style={overriddenStyles}
            description="open and close the menu"
          />
          <ul className="bx--overflow-menu__options">
            {children}
          </ul>
        </div>
      </ClickListener>
    );
  }
}

export default OverflowMenu;
