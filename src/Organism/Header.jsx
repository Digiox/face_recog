import React from 'react';
import { PageHeader } from 'antd';
import '$css/header.css'

const Header = () => {
  return (
    <div className="global-header-style">
      <PageHeader
      title="Face detection"
      subTitle="Face image analysis"
      ghost={true}
    />
    </div>
  );
}

export default Header;