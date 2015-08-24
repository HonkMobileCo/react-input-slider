var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'InputSlider',

  propTypes: {
    axis: React.PropTypes.string,
    x: React.PropTypes.number,
    xmax: React.PropTypes.number,
    xmin: React.PropTypes.number,
    y: React.PropTypes.number,
    ymax: React.PropTypes.number,
    ymin: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      axis: 'x',
      xmin: 0,
      ymin: 0
    };
  },

  render() {
    var pos = this.getPosition();
    var axis = this.props.axis;
    var valueStyle = {};
    if(axis === 'x') valueStyle.width = pos.left;
    if(axis === 'y') valueStyle.height = pos.top;

    return (
      <div {...this.props}
        className={cx('u-slider', `u-slider-${axis}`, this.props.className)}
        onClick={this.handleClick}>
        <div
          className="value"
          style={valueStyle}>
        </div>
        <div
          className="handle"
          ref="handle"
          onMouseDown={this.handleMounseDown}
          onClick={function(e) {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
          style={pos}>
        </div>
      </div>
    );
  },

  getPosition() {
    var top = (this.props.y-this.props.ymin)/(this.props.ymax-this.props.ymin)*100;
    var left = (this.props.x-this.props.xmin)/(this.props.xmax-this.props.xmin)*100;

    if(top > 100) top = 100;
    if(top < 0) top = 0;
    if(this.props.axis === 'x') top = 0;
    top += '%';

    if(left > 100) left = 100;
    if(left < 0) left = 0;
    if(this.props.axis === 'y') left = 0;
    left += '%';

    return {top: top, left: left};
  },

  change(pos) {
    if(this.props.onChange) {
      var rect = this.getDOMNode().getBoundingClientRect();
      var width = rect.width;
      var height = rect.height;
      var left = pos.left;
      var top = pos.top;
      var axis = this.props.axis;

      if(left < 0) left = 0;
      if(left > width) left = width;
      if(top < 0) top = 0;
      if(top > height) top = height;

      var x = 0;
      var y = 0;
      if(axis === 'x' || axis === 'xy') {
        x = left/width*(this.props.xmax-this.props.xmin) + this.props.xmin;
      }
      if(axis === 'y' || axis === 'xy') {
        y = top/height*(this.props.ymax-this.props.ymin) + this.props.ymin;
      }

      this.props.onChange({x: x, y: y});
    }
  },

  handleMounseDown(e) {
    var dom = this.refs.handle.getDOMNode();

    this.start = {
      x: dom.offsetLeft,
      y: dom.offsetTop
    };

    this.offset = {
      x: e.clientX,
      y: e.clientY
    };

    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleDragEnd);
  },

  handleDrag(e) {
    e.preventDefault();
    var rect = this.getDOMNode().getBoundingClientRect();
    var posX = e.clientX + this.start.x - this.offset.x;
    var posY = e.clientY + this.start.y - this.offset.y;

    this.change({
      left: posX,
      top: posY
    });
  },

  handleDragEnd(e) {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragEnd);
  },

  handleClick(e) {
    var rect = this.getDOMNode().getBoundingClientRect();

    this.change({
      left: (e.clientX - rect.left),
      top: (e.clientY - rect.top)
    });
  }
});
