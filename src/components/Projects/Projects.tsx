import { AppWrapper, MotionWrapper } from "../../wrapper"

const Header = () => {
  return (
    <div>Projects</div>
  )
}

export default AppWrapper(MotionWrapper(Header), 'projects')

