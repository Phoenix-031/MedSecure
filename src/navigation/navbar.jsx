import { AudioOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Input, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Search } = Input;
function Navbar() {
  return (
    <div className="grid grid-cols-[1fr_2.5fr_2fr_3fr] h-full items-center">
      <div className="bg-red-400"></div>
      <div className="h-full">
        <ul className="grid grid-cols-4 justify-items-center items-center h-full">
          <Link className="text-xl font-bold" to={'/'}>
            Home
          </Link>
          <Link className="text-xl font-bold" to={'/about'}>
            About
          </Link>
          <ExploreDropdown />
          <Link className="text-xl font-bold" to={'/contact'}>
            Contact
          </Link>
        </ul>
      </div>
      <div className=" grid grid-cols-[1fr_0.3fr_0.3fr] h-full p-3 items-center gap-3 pl-12 col-start-4">
        <SearchBar />
        <div>notification</div>
        <div>accout</div>
      </div>
    </div>
  );
}

function SearchBar() {
  return <Search placeholder="search here" size="large" allowClear />;
}

function ExploreDropdown() {
  const linkClass =
    'text-xl w-full flex items-center justify-center p-[0.75rem]';
  const items = [
    {
      key: '1',
      label: (
        <Link className={`${linkClass}`} to={'/explore'}>
          Author
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link className={`${linkClass}`} to={'/explore'}>
          Activity
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link className={`${linkClass}`} to={'/explore'}>
          Creator
        </Link>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      overlayClassName="w-40 h-40 items-center justify-center"
      placement="bottom"
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="text-xl font-bold">Explore</Space>
      </a>
    </Dropdown>
  );
}

export default Navbar;
