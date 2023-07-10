import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Select, Space } from 'antd';
import React from 'react';

const items = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

const CascadedDropdown = () => (
  <Dropdown
    menu={{ items }}
    overlayClassName="w-[15rem]"
    placement="bottomRight"
  >
    <a onClick={(e) => e.preventDefault()} className="">
      <Space
        className=" border border-red-800 rounded-xl text-lg font-bold 
      flex items-center justify-center
      py-2 px-4"
      >
        filter
        <DownOutlined size={10} />
      </Space>
    </a>
  </Dropdown>
);

const specialities = [
  {
    value: '0',
    label: 'all',
  },
  {
    value: '1',
    label: 'Cardiology',
  },
  {
    value: '2',
    label: 'Dermatology',
  },
  {
    value: '3',
    label: 'Endocrinology',
  },
  {
    value: '4',
    label: 'Gastroenterology',
  },
  {
    value: '5',
    label: 'General Surgery',
  },
  {
    value: '6',
    label: 'Gynaecology',
  },
  {
    value: '7',
    label: 'Neurology',
  },
  {
    value: '8',
    label: 'Oncology',
  },
  {
    value: '9',
    label: 'Orthopaedics',
  },
  {
    value: '10',
    label: 'Paediatrics',
  },
  {
    value: '11',
    label: 'Psychiatry',
  },
  {
    value: '12',
    label: 'Urology',
  },
  {
    value: '13',
    label: 'Vascular Surgery',
  },
  {
    value: '14',
    label: 'Others',
  },
];
function SpecialityFilter() {
  return (
    <Select
      allowClear
      style={{ width: '100%' }}
      placeholder="Filter by speciality"
      defaultValue={[]}
      options={specialities}
    />
  );
}

export default CascadedDropdown;
export { SpecialityFilter };
