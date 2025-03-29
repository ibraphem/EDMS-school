import Select from "react-select";

const CustomSelect = ({ 
  name,
  initialValue,
  label,
  placeholder = "Select Option",
  error,
  touched,
  options,
  onChange,
  onBlur,
  disabled,
  getOptionLabel,
  getOptionValue,
  isRequired = true,
  isMulti = false,
}) => {
  return (
    <div className="relative w-full mb-7">
      <Select
        classNamePrefix="something"
        placeholder={placeholder}
        name={name}
        required={false}
        value={initialValue ? initialValue : null}
        isMulti={isMulti}
        isDisabled={disabled}
        menuPortalTarget={document.body}
        closeMenuOnSelect={isMulti ? false : true}
        hideSelectedOptions={false}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        onChange={onChange}
        onBlur={onBlur}
        options={options}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            flexGrow: 1,
          }),
          control: (provided, state) => ({
            ...provided,
            border: 0,
            borderColor: state.isFocused ? "#6DDD78" : "#757575",
            boxShadow: state.isFocused ? "none" : "none",
            outline: `1px solid #D9D9D9`,
            padding: 6,
          }),
          menuList: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid white",
            borderRadius: "4px",
            // backgroundColor: "#fff",
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "#718096",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            fontSize: "14px",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "#000",
            fontSize: "12px",
          }),
          option: (provided) => ({
            ...provided,
            color: "#000",
            border: "none",
            fontSize: "13px",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#ccffcc",
              // color: "#fff",
            },
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#117F00",
            color: "white",
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: "white",
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            color: "white",
            "&:hover": {
              backgroundColor: "darkred",
              color: "white",
            },
          }),
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
          }),
        }}
      />
      {touched && error &&   <p className="mt-0 text-sm text-red-600 font-medium">{error}</p>}
    </div>
  );
};

export default CustomSelect;
