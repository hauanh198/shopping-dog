import { AutoComplete, Input, Icon } from "antd";
import React, { useState } from "react";
import { api } from "../services/api";
import { RiSearchLine } from "react-icons/ri";

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  api.getDataProducts.featured.filter((_, id) => {
    // lấy data từ mảng ra
    const category = `${query}${id}`;
    return {
      value: category,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            Found {query} on{" "}
            <a href={`searchResult${query}`} rel="noopener noreferrer">
              {category}
            </a>
          </span>
          <span>{getRandomInt(200, 100)} results</span>
        </div>
      ),
    };
  });

const findNames = (value) => {
  let b = [];
  let array = api.getDataProducts.featured;
  for (var i = 0; i < array.length; i++) {
    let arrtoUpperCase = array[i].name.toUpperCase();
    if (arrtoUpperCase.includes(value.toUpperCase())) {
      b.push(array[i]);
    }
  }
  return b;
};

const findImage = (Arr) => {};

const SearchDog = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    let items;
    if (value.length > 3) {
      items = findNames(value);
      if (items.length > 0) {
        setOptions(value ? searchResult(value) : []);
      }
    }

    console.log(items);
    //setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {};

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
      <Input
        placeholder="Search..."
        prefix={
          <RiSearchLine className="site-form-item-icon hp-text-color-black-80 hp-text-color-dark-20" />
        }
      />
      {/* <Input suffix={<Icon type="search" />} /> */}
      {/* <Input.Search size="large" placeholder="input here" enterButton /> */}
    </AutoComplete>
  );
};

export default React.memo(SearchDog);