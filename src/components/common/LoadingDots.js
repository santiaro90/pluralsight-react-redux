import React, { PropTypes } from 'react';

class LoadingDots extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { frame: 1 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';

        while (dots > 0) {
            text += '.';
            dots--;
        }

        return (
            <span>{text}&nbsp;</span>
        );
    }
}

LoadingDots.defaultProps = {
    dots: 3,
    interval: 300
};

LoadingDots.propTypes = {
    dots: PropTypes.number,
    interval: PropTypes.number
};

export default LoadingDots;
