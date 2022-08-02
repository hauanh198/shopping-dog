import React from "react";
import { createStructuredSelector } from "reselect";
import { useDispatch , useSelector } from "react-redux";
import { Row, Col , Input } from "antd";
import { getLoadingProduct } from "../reselect/reselect";
import { getDataProducts } from "../actions";

const { Search } = Input;
const SearchDog =() =>{
    const { loading } = useSelector(createStructuredSelector({
        loading: getLoadingProduct
    }));

    const dispatch = useDispatch();
    return(
        <Row style={{margin: '20px 0px'}}>
            <Col span={12} offset={6}>
                <Search 
                    placeholder ="name of getDataProducts"
                    enterButton
                    loading={loading}
                    onSearch={val => dispatch(getDataProducts(val))}
                
                />
            </Col>

        </Row>
    )
}
export default React.memo(SearchDog)