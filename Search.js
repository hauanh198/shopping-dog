import { AutoComplete, Input } from "antd";
import React, { useState } from "react";
import { api } from "../services/api";
import { RiSearchLine } from "react-icons/ri";
import 'antd/dist/antd.css';
import './search.css'

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (items) =>
items.map((item, name) => {
    // lấy data từ mảng ra
    console.log('category',item);
    return {
      value: item.name,
      label: (
        <div className="box">
          <span><img src={item.image}></img></span>
          <span>{item.name}</span>
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
const childNames = (value) => {
  let b = [];
  let array = api.getDataProducts.latest;
  for (var i = 0; i < array.length; i++) {
    let arrtoUpperCase = array[i].name.toUpperCase();
    if (arrtoUpperCase.includes(value.toUpperCase())) {
      b.push(array[i]);
    }
  }
  return b;
};
const lastNames = (value) => {
  let b = [];
  let array = api.getDataProducts.top_selling;
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
    console.log(value);
    let items;
    if (value.length > 0) {
      items = findNames(value);
      if (items.length > 0) {
        setOptions(value ? searchResult(items) : []);
      }
    }
    if (value.length > 0) {
      items = childNames(value);
      if (items.length > 0) {
        setOptions(value ? searchResult(items) : []);
      }
    }
    if (value.length > 0) {
      items = lastNames(value);
      if (items.length > 0) {
        setOptions(value ? searchResult(items) : []);
      }
    }
    // setOptions(value ? searchResult(items) : []);
    
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