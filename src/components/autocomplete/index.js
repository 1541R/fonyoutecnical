import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            texto: '',
        };

    }

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;
        const {
            isOpen,
            texto
        } = this.state;

        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    value={texto}
                    style={{ width: '100%' }}
                    onChange={(event) => {
                        
                        const newText = event.target.value;
                        onChangeText(newText);
                        this.setState({  texto : newText });
                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false }), 100);
                    }}
                    onFocus={() => {
                        if (text) {
                            setTimeout(() => this.setState({isOpen: true }) , 100);
                        }
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) {
                            onChangeSelection(text);
                        }
                    }}
                />
                {isOpen &&
                <Paper className="container-results" square>
                    {suggestions.map(suggestion =>
                    <MenuItem
                        key={suggestion.id}
                        component="div"
                        onClick={() => {
                            onChangeSelection(suggestion.name);
                            this.setState({  texto : suggestion.name });
                            this.setState({ isOpen: true });
                            //setTimeout( () => { console.log(texto); }, 600 );
                            console.log(texto);
                        }}
                    >
                        {suggestion.name}
                    </MenuItem>)}
                </Paper>}
            </div>
        );
    }
}

export default Autocomplete;
