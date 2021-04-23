import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiSelector } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';

const CustomSelect = ({ value, list, onChange }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Button className="relative form-input flex justify-between">
            <span className="truncate">{value}</span>
            <HiSelector className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute w-full translate-x-0 -translate-y-full text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {list.map(item => (
                <Listbox.Option
                  key={item}
                  className={({ active }) =>
                    `${
                      active ? 'text-amber-900 bg-indigo-100' : 'text-gray-900'
                    }
                 cursor-pointer select-none relative py-2 pl-10 pr-4 hover:bg-indigo-100 rounded-md`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-bold text-gray-600' : 'font-normal'
                        } block truncate`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-700">
                          <FaCheck
                            className="w-3 h-3 fill-current"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default CustomSelect;
