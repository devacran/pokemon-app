import React from "react";
import { connect } from "react-redux";
import { setHistoryPage } from "../actions";

class Page extends React.Component {
  constructor(props) {
    super(props);
    const { children, ...componentProps } = props;
    this.children = children;
    this.componentProps = componentProps;
  }
  render() {
    return <>{this.children(this.componentProps)}</>;
  }
}

const mapDispatchToProps = {};
const mapStateToProps = state => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Page);
