import React from "react"
import CmGap from "../Components/CmGap"
import CmBtn from "../Components/CmBtn"
import MdHeading from "../Components/MdHeading"
import ScreenPhoto from "../Components/ScreenPhoto"

const ScreenShotPage = () => {
  const imageData = [
    `https://images.pexels.com/photos/10584487/pexels-photo-10584487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/21011577/pexels-photo-21011577/free-photo-of-two-people-in-traditional-clothing-standing-next-to-each-other.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/10341447/pexels-photo-10341447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/7691721/pexels-photo-7691721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/6174062/pexels-photo-6174062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/21011577/pexels-photo-21011577/free-photo-of-two-people-in-traditional-clothing-standing-next-to-each-other.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/10341447/pexels-photo-10341447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/7691721/pexels-photo-7691721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/6174062/pexels-photo-6174062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/10584487/pexels-photo-10584487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/21011577/pexels-photo-21011577/free-photo-of-two-people-in-traditional-clothing-standing-next-to-each-other.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/10341447/pexels-photo-10341447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/7691721/pexels-photo-7691721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/6174062/pexels-photo-6174062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/21011577/pexels-photo-21011577/free-photo-of-two-people-in-traditional-clothing-standing-next-to-each-other.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/10341447/pexels-photo-10341447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/7691721/pexels-photo-7691721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/6174062/pexels-photo-6174062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  ]

  return (
    <CmGap>
      <div className="align-between">
        <MdHeading data={`All Screen Shot`} />

        <CmBtn data={`Add Filter`} />
      </div>
      <div className="three-item">
        {imageData?.map((img, index) => (
          <ScreenPhoto key={index} image={img} />
        ))}
      </div>
    </CmGap>
  )
}

export default ScreenShotPage
