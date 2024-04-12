// App.js
import React, { Component } from 'react';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

class Aplikace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poznamky: [],
      filtrovanePoznamky: [],
      filtrovatKlicoveSlovo: ''
    };
  }

  componentDidMount() {
    const ulozenePoznamky = JSON.parse(localStorage.getItem('poznamky'));
    if (ulozenePoznamky) {
      this.setState({ poznamky: ulozenePoznamky });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.poznamky !== this.state.poznamky || prevState.filtrovatKlicoveSlovo !== this.state.filtrovatKlicoveSlovo) {
      localStorage.setItem('poznamky', JSON.stringify(this.state.poznamky));
      if (this.state.filtrovatKlicoveSlovo) {
        const filtrovane = this.state.poznamky.filter(poznamka =>
          poznamka.text.toLowerCase().includes(this.state.filtrovatKlicoveSlovo.toLowerCase())
        );
        this.setState({ filtrovanePoznamky: filtrovane });
      } else {
        this.setState({ filtrovanePoznamky: this.state.poznamky });
      }
    }
  }

  pridejPoznamku = (text) => {
    const novaPoznamka = {
      id: Math.random(),
      text: text
    };
    this.setState({ poznamky: [...this.state.poznamky, novaPoznamka] });
  };

  smazPoznamku = (id) => {
    this.setState({ poznamky: this.state.poznamky.filter(poznamka => poznamka.id !== id) });
  };

  zmenaFiltrace = (text) => {
    this.setState({ filtrovatKlicoveSlovo: text });
  };

  render() {
    return (
      <div className="Aplikace">
        <h1>Poznámky</h1>
        <NoteForm pridejPoznamku={this.pridejPoznamku} />
        <input 
          type="text" 
          placeholder="Filtrovat poznámky" 
          value={this.state.filtrovatKlicoveSlovo} 
          onChange={(e) => this.zmenaFiltrace(e.target.value)} 
        />
        <NoteList poznamky={this.state.filtrovanePoznamky} smazPoznamku={this.smazPoznamku} />
      </div>
    );
  }
}

export default Aplikace;
