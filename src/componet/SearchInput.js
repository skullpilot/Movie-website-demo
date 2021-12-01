import { Input, Space } from "antd";

function SearchInput() {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);
  return (
    <Space direction="vertical">
      <Search placeholder="Search" onSearch={onSearch} style={{ width: 200 }} />
    </Space>
  );
}

export default SearchInput;
