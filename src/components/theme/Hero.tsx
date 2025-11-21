import { grid } from "../../assets/index";

const Grid = () => {
  return (
      <img src={grid} alt="grid"
          className="hidden lg:block absolute -top-[1.125rem] left-0 w-full object-contain object-top pointer-events-none opacity-50"
      />
  )
}

export default Grid
