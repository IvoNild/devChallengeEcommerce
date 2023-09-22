import { styled } from "styled-components";
import { ArrowIcon } from "./arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

interface FilterByPriorityProps {}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    background: transparent;
    border: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    padding: 5px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 8px;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  width: 200px;
  list-style: none;
  top: 100%;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePriority = (value: PriorityTypes)=>{
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={()=>{handleUpdatePriority(PriorityTypes.NEWS)}}>Novidades</li>
          <li onClick={()=>{handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}}>Preço: Maior - menor</li>
          <li onClick={()=>{handleUpdatePriority(PriorityTypes.MINOR_PRICE)}}>Preço: Menor - maior</li>
          <li  onClick={()=>{handleUpdatePriority(PriorityTypes.POPULARITY)}}>Mais vendidos</li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
