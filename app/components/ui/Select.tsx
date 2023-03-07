"use client";
import React, { Fragment, ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronsUpDown, Check } from "lucide-react";

interface SelectProps {
  label: string;
  id: string | number;
  value?: string | number;
  //onChange: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  // onSelectChange: (selection: any) => void;
  onChange: (selection: any) => void;
  data: {
    [key: string]: string;
  }[];
}

export const Select = ({ data, label, id, onChange }: SelectProps) => {
  const [selected, setSelected] = React.useState(data[0]);
  const [query, setQuery] = React.useState("");
  const filteredData =
    query === ""
      ? data
      : data.filter((item) =>
          item[label]
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-sm focus:ring-1 focus:ring-indigo-500">
          <Combobox.Input
            className="w-full border border-indigo-500 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-1 focus:border-indigo-500"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(value: any) => value[label]}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronsUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full  rounded-md bg-white py-1 text-body shadow ring-1 ring-indigo-500 ring-opacity-5 focus:outline-none overflow-hidden">
            {filteredData.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredData.map((item) => (
                <Combobox.Option
                  key={item[id]}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-indigo-600 text-white" : "text-gray-700"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item[label]}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-indigo-600"
                          }`}
                        >
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

// USAGE EXAMPLE
// <Select
//   label="name"
//   id="id"
//   data={[
//     { id: "1", name: "steve" },
//     { id: "2", name: "harold" },
//   ]}
// />;
