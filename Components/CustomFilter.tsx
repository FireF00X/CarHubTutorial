'use client'
import React from 'react'
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { customFilterProps } from '@/types';
import { updateSearchParams } from '@/utils';

const CustomFilter = ({ title, options,setFilter }: customFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

return (
  <div className='w-fit'>
    <Listbox
      value={selected}
      onChange={(e) => {
        setSelected(e);
        setFilter(e.value);
      }}>
      <div className="relative w-fit z-10">
        <Listbox.Button className="custom-filter__btn">
          <span className='truncate block'>{selected.title}</span>
          <Image
            src='/chevron-up-down.svg>'
            alt='chevron icon'
            width={20}
            height={20}
            className='object-contain ml-4' />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <Listbox.Options className='custom-filter__options'>
            {options.map((option) => (
              <Listbox.Option
                key={option.title}
                value={option}
                className={({ active }) => `select-none px-4 relative py-2 cursor-default ${active ? 'bg-primary-blue text-white' : 'text-gray-900'
                  }`}>
                {({ selected }) => (
                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                    {option.title}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  </div>
)
}

export default CustomFilter