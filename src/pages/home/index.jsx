import { Dropdown, Input, Tag, Typography } from 'antd';
import React from 'react';
import DoctorAppointmentCard from './components/doctorAppointmentCard';
import CascadedDropdown, { SpecialityFilter } from './components/filter';
import RecentTreatmentCard from './components/recentTreatmentCard';
const { Title } = Typography;
const { Search } = Input;

function HomeScreen() {
  const ratingFilter = ['all', '< 4', '>= 4', '> 4.5', '5'];
  return (
    <div className="h-full grid grid-cols-[1fr_1fr] overflow-auto">
      <div className="h-full w-full p-2 divide-y-2 divider-[#000] grid grid-rows-[4rem_1fr] gap-2 overflow-auto bg-slate-200">
        <div className="h-full flex justify-between items-center px-8 bg-white rounded-lg">
          <Title level={3}>Recent Treatments</Title>
          <div>
            <CascadedDropdown />
          </div>
        </div>
        <div className="overflow-y-auto h-full">
          {Array.from({ length: 100 }, (_, i) => (
            <RecentTreatmentCard key={i} />
          ))}
        </div>
      </div>
      <div className="h-full w-full p-2 divide-y-2 divider-[#000] grid grid-rows-[9rem_1fr] gap-2 overflow-auto bg-slate-200">
        <div className="h-full grid grid-rows-[1fr_2fr] grid-cols-[2fr_1.5fr] px-8 py-2 bg-white rounded-lg">
          <Title level={3}>Available Doctors</Title>
          {/* speciality dropdown */}
          <div className="col-start-2 flex items-center justify-center">
            <SpecialityFilter />
          </div>
          {/* search bar */}
          <div className="col-start-2 flex items-center justify-center">
            <Search placeholder="search here" size="large" allowClear />
          </div>
          {/* tag filters */}
          <div className="flex row-start-2 py-2 flex-col">
            <label htmlFor="" className="text-lg font-bold">
              Rating
            </label>
            <div className="overflow-x-auto flex">
              {Array.from(ratingFilter, (data, i) => (
                <Tag
                  color="default"
                  className="px-3 py-1 text-lg text-black flex items-center justify-center rounded-2xl min-w-[4rem] cursor-pointer"
                  onClick={() => console.log('clicked')}
                >
                  {data}
                </Tag>
              ))}
            </div>
          </div>
        </div>
        <div className="overflow-y-auto h-full">
          {Array.from({ length: 100 }, (_, i) => (
            <DoctorAppointmentCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
