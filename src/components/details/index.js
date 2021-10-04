import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        /*
        const {
            match: { params: { itemId } },
            findCurrentItem,
        } = this.props;
        findCurrentItem(itemId);*/
        const {
            match: { params: { itemId } },
            findCurrentItem,
        } = this.props;

        fetch(`https://rickandmortyapi.com/api/character/${itemId}`)
                .then( res => res.json() )
                .then( data => {
                    //addData(data);

                    this.setState({ data: data })

                }).catch(function(error){
                    console.log('No hay error',error);
                });
        
    }


    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        /*const {
            currentItem,
        } = this.props; */

        const {
            data,
        } = this.state;

        return (
            <Page
                currentItem={data}
                goTo={this.goTo}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
    currentItem: state.currentItem,
});

const mapDispatchToProps = {
    findCurrentItem,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
);
