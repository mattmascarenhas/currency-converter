import React, { Component } from "react";
import './conversor.css';

export default class Conversor extends Component{
    constructor(props){
        super(props);
        this.state={
            currencyA_value: "",
            currencyB_value: 0,
        }
        this.convert = this.convert.bind(this) //funçao para mostrar o state
    }

    convert(){
        let convert_A_to_B = `${this.props.currencyA}-${this.props.currencyB}`;
        let url = `https://economia.awesomeapi.com.br/json/last/${convert_A_to_B}`;
        let convert_A_to_B_json = `${this.props.currencyA}${this.props.currencyB}`;
        console.log()
        fetch(url).then(res=>{
            return res.json()
        }).then(json=>{
            let cotacao = json[convert_A_to_B_json].high;
            let currencyB_value = (parseFloat(this.state.currencyA_value) * cotacao).toFixed(2);
            this.setState({currencyB_value});
            console.log(this.state.currencyA_value)
        })
    }

    render(){
        return(
            <div className="conversor">
                <h2>{this.props.currencyA} para {this.props.currencyB}</h2>
                <input type='text' onChange={(event)=>{this.setState({currencyA_value:event.target.value})}}></input>
                <input type='button' value='Converter' onClick={this.convert}></input>
                <h2>Valor convertido</h2>
                <h2>{this.state.currencyB_value}</h2>
            </div>
        )
    }
}