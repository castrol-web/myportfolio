import React from 'react';
import SocialMedia from '../components/SocialMedia';
import NavigationDots from '../components/NavigationDots';

const AppWrapper = (Component, idName, classNames) => function HOC() {
  const currentYear = new Date().getFullYear()
  return (
    <div id={idName} className={`lg:w-full lg:h-auto flex flex-row ${classNames}`}>
      <SocialMedia />
      <div className="flex-1 flex w-full flex-col lg:py-16 px-8">
        <Component />

        <div className="p-8 mt-2 flex flex-col justify-end items-end">
          <p className="p-2 text-lg font-semibold text-center text-gray-800">@{currentYear} CASTROL</p>
          <p className="p-2 text-md font-semibold text-center text-gray-800">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrapper;
