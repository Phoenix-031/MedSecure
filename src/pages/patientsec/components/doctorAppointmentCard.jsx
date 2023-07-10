import { DownloadOutlined, HeartFilled, PlusOutlined } from '@ant-design/icons';
import { Button, Rate, Statistic, Tag } from 'antd';
import React from 'react';
import Profile from '../../../assets/doctor_profile.jpg';
function DoctorAppointmentCard() {
  const tagColor = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ];

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
    <div className="h-[10rem] bg-white mb-4 py-2 rounded-lg grid grid-cols-[1fr_2fr_3fr_2fr] gap-x-4 grid-rows-[1fr_1fr_1fr]">
      <div className="row-span-4 flex items-center justify-center ">
        <div className="w-3/4 aspect-square rounded-full">
          <img
            src={Profile}
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className=" flex items-center text-lg font-semibold col-span-2">
        Krishnendu Dakshi
      </div>
      <div className=" flex items-center justify-end p-2 pr-6">
        <Rate
          character={<HeartFilled />}
          allowHalf
          defaultValue={Math.round(Math.random() * 5)}
        />
      </div>
      <div className="col-span-2 flex items-start text-lg font-bold">
        Fortis Memorial Research Institute.
      </div>
      <div className="col-start-4 flex items-start justify-end pr-8">
        <Statistic
          value={Math.round(Math.random() * 2000)}
          prefix={<HeartFilled />}
          valueStyle={{
            fontSize: '1.3rem',
          }}
        />
      </div>
      <div className="overflow-x-auto flex p-1  col-start-2 row-start-3">
        <Tag
          color={tagColor[Math.floor(Math.random() * tagColor.length)]}
          className="px-3 py-1 text-lg flex items-center justify-center rounded-lg"
        >
          {specialities[Math.floor(Math.random() * specialities.length)]}
        </Tag>
      </div>
      <div className="flex justify-end items-center row-start-3 col-start-4 p-2 pr-6">
        <Button
          type="primary"
          className="bg-orange-500"
          icon={<PlusOutlined />}
          size={'large'}
        >
          Appointment
        </Button>
      </div>
    </div>
  );
}

export default DoctorAppointmentCard;
