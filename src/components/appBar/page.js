import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Rick_and_Morty from "../../img/Rick_and_Morty.svg";
//import Typography from "@material-ui/core/Typography";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "../autocomplete";
import "./style.css";
function Page(props) {

    const { 
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
    } = props;

    return(
        <AppBar position="static" >
            <Toolbar className="appbar" >
                <Grid xs={1} item>
                    <img                        
                        src={Rick_and_Morty}
                        alt="Rick and morty"
                    />
                </Grid>
                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />
                <BubbleChart />
            </Toolbar>
        </AppBar>
    )
} 

export default Page;