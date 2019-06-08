import * as React from "react";
import { Icon } from "antd";
import { connect } from "react-redux";
import ActionTypes from "../../actions/ActionTypes";
import Store from "../../store";
import { TypeHelper } from "../../helper";

type StoreType = typeof Store;
interface IHeaderProps extends StoreType {}

const Header: React.FunctionComponent<TypeHelper.Omit<IHeaderProps, keyof StoreType>> = props => {
  const { dispatch } = props as IHeaderProps;
  const onSideBarOpen = () => {
    dispatch(ActionTypes.Creator.SIDEBAR_OPEN());
  };

  return (
    <header className="header">
      <button onClick={onSideBarOpen} className="menubar">
        <Icon type="menu" />
      </button>
    </header>
  );
};

export default connect(
  state => ({ ...state }),
  dispatch => ({ dispatch })
)(Header);
