import { IconOuter } from "./general_styles";
let plus_icon_path = "M 50 25 L 50 75 M 75 50 L 25 50";

export function PlusIcon({list_index, array_index, updateCategories}) {
    function handleClick() {
      updateCategories("add", list_index, array_index, { category: "", editable: true });
    }
      return (
          <IconOuter onClick = {handleClick}>
            <svg viewBox='0 0 100 100'>
              <path strokeWidth='2px' stroke="black" d={plus_icon_path}/>
            </svg>
          </IconOuter>
      )
}