'use strict';

var ReactNative = require('react-native');
var {StyleSheet, View, Text, UIManager} = ReactNative;
var React = require('react');
var {Component, PropTypes} = React;
class SectionHeader extends Component {

  componentDidMount() {
    this.props.updateTag && this.props.updateTag(ReactNative.findNodeHandle(this.refs.view), this.props.sectionId);
  }

  render() {
    var SectionComponent = this.props.component;
    var content = SectionComponent ?
      <SectionComponent {...this.props} /> :
      <Text style={styles.text}>{this.props.title}</Text>;

    return (
      <View ref="view" style={this.props.sectionHeaderContainerStyle}>
        {content}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#d8d8d8',
    borderTopWidth: 1,
    borderTopColor: '#cccccc'
  },
  text: {
    fontWeight: '700',
    paddingTop:2,
    paddingBottom:2,
    paddingLeft: 2
  }
});

SectionHeader.propTypes = {

  /**
   * The id of the section
   */
  sectionId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  /**
   * A component to render for each section item
   */
  component: PropTypes.func,

  /**
   * A function used to propagate the root nodes handle back to the parent
   */
  updateTag: PropTypes.func

};

module.exports = SectionHeader;
