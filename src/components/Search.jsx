import React from "react";

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: "1",
    };
  }

  buttonToggle(e) {
    //should dictate the toggle logic
    const id = e.target.id
    this.setState({ disabled: id })
    this.refs.input.value = '';
  }

  sendSearch(e) {
    const input = document.querySelector('.search-input');

    if (e.key === 'Enter') {

      var buttons = document.querySelectorAll('button');

      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].disabled === true) {

          const address = buttons[i].getAttribute("address")
          const input = encodeURIComponent(document.getElementById('search-input').value)
          const url = `${address}${input}`;

          window.open(url);
          document.getElementById('search-input').value = '';
        }
      }
    }
  }

  render() {
    return (
      <div className="flex justify-center ">
        <div>
          <div className="flex space-x-8 justify-center pt-8 pb-4" onClick={this.buttonToggle.bind(this)}>
            <button className="bg-google-icon bg-no-repeat w-8 h-8 outline-inherit cursor-pointer border-none disabled:opacity-100 opacity-50"
              id='1' disabled={this.state.disabled === "1"}
              engine='google' address='http://www.google.com/search?q=' >
            </button>
            <button className="bg-youtube-icon bg-no-repeat w-8 h-8 outline-inherit cursor-pointer border-none disabled:opacity-100 opacity-50"
              id='3' disabled={this.state.disabled === "3"}
              engine='youtube' address='https://www.youtube.com/results?search_query='></button>
            <button className="bg-duck-icon bg-no-repeat w-8 h-8 outline-inherit cursor-pointer border-none disabled:opacity-100 opacity-50"
              id='2' disabled={this.state.disabled === "2"}
              engine='duckduckgo' address='https://www.duckduckgo.com/?q=' ></button>
            <button className="bg-stack-icon bg-no-repeat w-8 h-8 outline-inherit cursor-pointer border-none disabled:opacity-100 opacity-50"
              id='4' disabled={this.state.disabled === "4"}
              engine='stack' address='https://stackoverflow.com/?q='></button>
          </div>
          <input className="p-2 items-center w-60 h-8 boarder-none bg-off-white1 border-white border border-solid border-gray-300 rounded-xl focus:border-red2 focus:outline-none"
            autoFocus id='search-input' type='text' ref="input" onKeyDown={this.sendSearch} />
        </div>
      </div>
    )
  };
};

export default SearchBox