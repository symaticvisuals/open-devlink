"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
  tv,
  useCheckbox,
  VisuallyHidden,
  Chip,
  CheckboxIcon,
  Input,
} from "@nextui-org/react";

export default function TypeTabs() {
  let tabs = [
    {
      id: "Contributors",
      label: "Contribute to Open Source",
      description:
        "Repositories that are looking for contributors to contribute to their projects.",
      children: <ContributorElements />,
    },
    {
      id: "Creators",
      label: "Creator Repos",
      description: "Repository of the creators of Open Spacelink.",
      children: <CreatorElements />,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs} size="lg">
        {(item) => (
          <Tab key={item.id} title={item.id}>
            <h3 className="text-xl font-semibold text-blue-400">
              {item.label}
            </h3>
            <p>{item.description}</p>
            {item.children}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

const ContributorElements = () => {
  const languages = [
    {
      value: "Javascript",
      label: "Javascript",
    },
    {
      value: "React",
      label: "React",
    },
    {
      value: "Svelte",
      label: "Svelte",
    },
    {
      value: "Typescript",
      label: "Typescript",
    },
    {
      value: "Python",
      label: "Python",
    },
    {
      value: "Ruby",
      label: "Ruby",
    },
  ];
  return (
    <div className="mt-3 grid grid-cols-3 gap-3">
      <Input
        placeholder="Search for a repository"
        className="cols-span-2"
        size="lg"
      />
      <Select
        items={languages}
        label="Choose a language"
        placeholder="Select a language"
        className="max-w-xs"
        size="sm"
      >
        {(programmingLanguage) => (
          <SelectItem key={programmingLanguage.value}>
            {programmingLanguage.label}
          </SelectItem>
        )}
      </Select>
    </div>
  );
};

const checkbox = tv({
  slots: {
    base: "border-default  hover:bg-default-200 rounded-lg ",
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-primary bg-primary rounded-lg hover:bg-primary-500 hover:border-primary-500 ",
        content: "text-primary-foreground pl-1",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus rounded-lg ring-offset-2 ring-offset-background",
      },
    },
  },
});

const CreatorElements = () => {
  const options = [
    {
      title: "Beginner Friendly",
      icon: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      title: "Mentorship Available",
      icon: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      title: "Good First Issue",
      icon: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
  ];

  const languages = [
    {
      value: "Javascript",
      label: "Javascript",
    },
    {
      value: "React",
      label: "React",
    },
    {
      value: "Svelte",
      label: "Svelte",
    },
    {
      value: "Typescript",
      label: "Typescript",
    },
    {
      value: "Python",
      label: "Python",
    },
    {
      value: "Ruby",
      label: "Ruby",
    },
  ];
  return (
    <div className="mt-3 flex gap-4">
      <Input
        placeholder="Search for a repository"
        className="cols-span-2"
        size="lg"
      />
      <Select
        items={languages}
        label="Choose a language"
        placeholder="Select a language"
        className="max-w-xs"
        size="sm"
      >
        {(programmingLanguage) => (
          <SelectItem key={programmingLanguage.value}>
            {programmingLanguage.label}
          </SelectItem>
        )}
      </Select>
      {options.map((option, i) => (
        <CustomCheckBox key={i}>{option.title}</CustomCheckBox>
      ))}
    </div>
  );
};

const CustomCheckBox = ({ children }) => {
  const {
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    defaultSelected: true,
  });
  const styles = checkbox({ isSelected, isFocusVisible });
  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        startContent={isSelected ? <CheckboxIcon className="ml-1" /> : null}
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
};
