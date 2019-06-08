import * as React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { Icon } from "antd";
import { NavLink } from "react-router-dom";
import ActionTypes from "../../actions/ActionTypes";
import "./SideBar.less";

const SideBar: React.FunctionComponent<any> = props => {
  const { SIDEBAR_OPEN, dispatch } = props;

  return (
    <div className={cn("SideBar", { SIDEBAR_OPEN })}>
      <div className="SideBar__header">
        <button onClick={() => dispatch(ActionTypes.Creator.SIDEBAR_OPEN())} className="menubar">
          <Icon type="close-square" />
        </button>
      </div>
      <div className="SideBar__body">
        <ul className="navigation">
          <li className="nav__item">
            <NavLink activeClassName="is-active" to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink activeClassName="is-active" to="/Portfolio" className="nav__link">
              Portfolio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink activeClassName="is-active" to="/Blog" className="nav__link">
              Blog
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink activeClassName="is-active" to="/Works" className="nav__link">
              Works
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default connect(
  state => ({ ...state }),
  dispatch => ({ dispatch })
)(SideBar);
