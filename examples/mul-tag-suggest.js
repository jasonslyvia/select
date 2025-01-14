'use strict';

import React from 'react';
import Select, {Option} from 'rc-select';
import 'rc-select/assets/index.less';
import {fetch} from './common/tbFetchSuggest';

var Search = React.createClass({
  getInitialState() {
    return {
      data: []
    }
  },

  fetchData(value) {
    fetch(value, (data) => {
      this.setState({
        data,
      });
    });
  },

  handleSelect(value) {
    console.log('select ', value);
  },

  render() {
    var data = this.state.data;
    var options = data.map((d) => {
      return <Option key={d.value}>{d.text}</Option>;
    });
    return <div>
      <h2>multiple suggest</h2>

      <div>
        <Select
          style={{width: 500}}
          tags
          notFoundContent=""
          onSearch={this.fetchData}
          onSelect={this.handleSelect}
          filterOption={false}>
          {options}
        </Select>
      </div>
    </div>;
  }
});

React.render(<Search />, document.getElementById('__react-content'));
