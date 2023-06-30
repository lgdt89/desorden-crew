import React from 'react'
import { useParams} from 'react-router-dom';

export const WorkDetail = () => {
    const params = useParams()
    console.log("props", params.projectName)
  return (
    <div>WorkDetail {params.projectName}</div>
  )
}
