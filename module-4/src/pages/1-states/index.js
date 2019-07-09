import React from "react"
import "./layout.css"
import StaticClock from "./staticClock"
import DynamicClock from "./dynamicClock"

const Page = () => (
  <>
    <StaticClock date={new Date()}/>
    <DynamicClock/>
  </>
)

export default Page
