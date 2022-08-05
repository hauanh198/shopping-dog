import { AutoComplete, Input } from 'antd';
import React, { useState } from 'react';
import { api } from '../services/api';
const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  api.getDataProducts.featured.filter((_, id) => { // lấy data từ mảng ra
      const category = `${query}${id}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`searchResult${query}`}
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const SearchDog = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default React.memo(SearchDog) ;