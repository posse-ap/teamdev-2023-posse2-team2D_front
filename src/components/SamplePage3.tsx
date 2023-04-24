import React from "react";

type Props = {
  Message: string 
};

// const SamplePage3 = (props:Props) => {
//   return <p>{props.Message}</p>
// }
// export default SamplePage3;


// export const SamplePage3:React.VFC<Props> = (props) => {
//   return <p>{props.Message}</p>
// }

export const SamplePage3 = ({Message}:Props) => {
  return <p>{Message}</p>
}

// export const SamplePage3 = (Message:string) => {
//   return <p>{Message}</p>
// }

// export const SamplePage3 = (props:Props) => {
//   return <p>{props.Message}</p>
// }