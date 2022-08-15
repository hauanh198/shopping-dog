import React from "react";
import { Avatar, List } from 'antd';
import { Layout } from "antd";
import './style.css'
const { Footer } = Layout;
const data = [
  {
    title: 'HOME',
  },
  {
    title: 'CATEGORY',
  },
  {
    title: 'ORDER',
  },
  {
    title: 'CART',
  },
];
const FooterShopping = () => {
  return (
    <Footer>
      <div className="f_box">
        <div className="f_box-left">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="" />}
                  title={<a href="/">{item.title}</a>}
                  description=""
                />
              </List.Item>
            )}
          />
        </div>
        <div className="f_box-right">
          <p className="phone">phone number <span>0968691676</span></p>
          <p className="address">Láng Hạ - Đống Đa - Hà Nội</p>
          <p className="time">thời gian làm việc: <span>8:00 ~ 11:30 - 13:30 ~ 17:30</span></p>
          <p className="note">nhận đặt lịch chăm sóc tại nhà</p>
        </div>
      </div>
      <p className="copyright">MrKatsu ©2022 Created by MrKatsu</p>
    </Footer>
  );
};
export default React.memo(FooterShopping);
