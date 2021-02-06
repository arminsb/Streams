import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';


export class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }


    renderActions() {
        return (
            <React.Fragment>
                <button className='ui red button'
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}>
                    Delete
                    </button>
                <Link to='/' className='ui cancel button'>Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'are you sure you want to delete this stream?'
        }
        return `are you sure you want to delete this stream with title ${this.props.stream.title}?`
    }

    render() {
        return (
            <Modal
                title='Delete Line'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);