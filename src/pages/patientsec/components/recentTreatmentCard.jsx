import { DownloadOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import React from 'react';
import Profile from '../../../assets/doctor_profile.jpg';
function RecentTreatmentCard() {
  const specialities = [
    'Cardiology',
    'Dermatology',
    'Endocrinology',
    'Gastroenterology',
    'General Surgery',
    'Gynaecology',
    'Neurology',
    'Oncology',
    'Orthopaedics',
    'Paediatrics',
    'Psychiatry',
    'Urology',
    'Vascular Surgery',
    'Others',
  ];
  return (
    <div className="h-[14rem] bg-white mb-4 py-2 rounded-lg grid grid-cols-[1fr_3fr_2fr] gap-x-4 grid-rows-[1fr_1fr_2fr_1.5fr_1fr]">
      <div className="row-span-4 flex items-center justify-center ">
        <div className="w-3/4 aspect-square rounded-full">
          <img
            src={Profile}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className=" flex items-center text-lg font-semibold">
        Krishnendu Dakshi
      </div>
      <div className=" flex items-center justify-end p-2">02/07/2023</div>
      <div className="col-span-2 flex items-center text-lg font-bold">
        Fortis Memorial Research Institute.
      </div>
      <p className="col-span-2 flex items-center text-lg">
        Treated for pancreatic cancer
      </p>
      <div className="col-span-2 overflow-x-auto flex p-1  col-start-2">
        {Array.from(specialities, (data, i) => (
          <Tag
            color="magenta"
            className="px-3 py-2 text-lg flex items-center justify-center rounded-lg"
          >
            {data}
          </Tag>
        ))}
      </div>
      <div className="flex justify-end items-center row-start-5 col-start-3 p-2">
        <Button
          type="primary"
          className="bg-blue-500"
          icon={<DownloadOutlined />}
          size={'large'}
        >
          Download Prescription
        </Button>
      </div>
      <div className="flex justify-center items-center row-start-5">
        <Button type="primary" className="bg-blue-500">
          Contact
        </Button>
      </div>
    </div>
  );
}

export default RecentTreatmentCard;
