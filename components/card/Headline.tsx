import React, {FC, PropsWithChildren} from 'react'
import {styled} from '@stitches/react'
const RecentH1 = styled('h1', {
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
  '@media screen and (max-width: 600px)': {
    fontSize:30,
 },
  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
})
export interface Props {

}
const Headline:FC<PropsWithChildren<Props>> = ({children}) => {
  return (
      <RecentH1>{children}</RecentH1>
  )
}

export default Headline