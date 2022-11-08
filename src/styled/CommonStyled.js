import styled from 'styled-components';

export const Button = styled.button`
height: 30px;
margin-left: 20px;
width: 80px;
border-radius: 5px;
background-color: #4a6500;
color:#ffd56f ;
&:hover{
 background-color: #ffd56f;
color: #4a6500;   
}
`

export const InputButton = styled(Button)`
width:100px
`
export const Message = styled.div`

padding:30px;
margin: 30px;
font-size:20px;
text-align:center;
  padding-left: -100%;
  padding-right: -100%;
  animation: text 5s infinite linear;
  animation-direction: alternate;
  white-space: nowrap;
`
export const InputField = styled.input`
background-color:#ffd56f;
border-radius: 5px;
`
export const PageTotal = styled.div`
margin-top: 80px;
text-align: center;
`
export const FormTotal = styled.form`
color: #4a6500;
width: 600px;
margin: 50px auto;
height:80px;
display: flex;
flex-direction: column;
background-color: #efbe61;
`