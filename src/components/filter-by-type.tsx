import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: upppercase;
  color: var(--text-dark);
  cursor: pointer;
  list-style: none;
  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
`;

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChnageType = (value: FilterType) => {
    setType(value);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => {
          handleChnageType(FilterType.ALL);
        }}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => {
          handleChnageType(FilterType.SHIRT);
        }}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => {
          handleChnageType(FilterType.MUG);
        }}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}
