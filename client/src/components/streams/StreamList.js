import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';


class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    };

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link to={`/stream/edit/${stream.id}`} className='ui inverted yellow button'>Edit</Link>
                    <Link to={`/stream/delete/${stream.id}`} className='ui inverted red button'>Delete</Link>
                </div>
            );
        }
    };

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className='large middle icon tv' />
                    <div className='content'>
                        <Link to={`/stream/${stream.id}`} className='header'>
                            {stream.title}
                        </Link>
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right', marginRight: '20px' }}>
                    <Link to='stream/new' className='ui inverted green button'>Create Stream</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Straems</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);