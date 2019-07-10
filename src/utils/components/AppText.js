import React from 'react'
import { Text } from 'react-native'

export const PoppinsBold = (props) => {
  return (
    <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, color: '#353535', ...props.style, }}>
      {props.children}
    </Text>
  )
}

export const PoppinsRegular = (props) => {
  return (
    <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 14, color: '#353535', ...props.style, }}>
      {props.children}
    </Text>
  )
}

export const PoppinsLight = (props) => {
  return (
    <Text style={{ fontFamily: 'PoppinsLight', fontSize: 14, color: '#353535', ...props.style, }}>
      {props.children}
    </Text>
  )
}

export const RobotoBold = (props) => {
  return (
    <Text style={{ fontFamily: 'RobotoBold', fontSize: 14, color: '#353535', ...props.style, }}>
      {props.children}
    </Text>
  )
}

export const RobotoRegular = (props) => {
  return (
    <Text style={{ fontFamily: 'RobotoRegular', fontSize: 14, color: '#353535', ...props.style, }}>
      {props.children}
    </Text>
  )
}

export const RobotoLight = (props) => {
  return (
    <Text style={{ fontFamily: 'RobotoLight', fontSize: 14, color: '#353535', ...props.style, }}>
      {props.children}
    </Text>
  )
}